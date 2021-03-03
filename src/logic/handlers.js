import React, { useContext } from 'react';
import { localStorageManager } from './local-storage-manager';
import useStore from './store';
import soundCorrect from "../assets/audio/correct.mp3";
import soundIncorrect from "../assets/audio/incorrect.mp3";
import soundGameOver from "../assets/audio/game-over.mp3";
import soundSwitch from "../assets/audio/switch.mp3";
import soundClose from "../assets/audio/close.mp3";

const Context = React.createContext();
export default function useHandlers() {
  return useContext(Context);
}

export const HandlersProvider = ({ children }) => {
  
  const {
    sectionToShow, 
    setSectionToShow,
    
    mathContainer, 
    setMathContainer,

    gameSettings,
    setGameSettings,

    audioSettings,
    setAudioSettings,

    gameProgress,
    setGameProgress,

    playingAnimation,
    setPlayingAnimation,
  } = useStore();

  const playSound = sound => {
    const audio = new Audio(sound);
    audio.volume = audioSettings.soundVolume;
    audio.play();
  };

  const switchSection = toShow => {

    const isGameOver = toShow === 'gameOver';

    if (isGameOver) {
      playSound(soundGameOver);
    } else {
      playSound(soundSwitch);
    }

    const question = `Skip and go to ${toShow}?`;
    if ((playingAnimation && !isGameOver)
      || (0 && !window.confirm(question))) {
      return;
    } 
    const switchedArr = Object.entries(sectionToShow).map(field => (
      field[0] === toShow 
      ? [ field[0], field[1] = true ]
      : [ field[0], field[1] = false ]
    ));
    saveAndReset();
    const switchedObj = Object.fromEntries(switchedArr);
    setSectionToShow(switchedObj);
    localStorageManager.set('sectionToShow', switchedObj);
  };

  const closeSections = () => {
    playSound(soundClose);

    const switchedArr = Object.entries(sectionToShow).map(field => (
      [ field[0], field[1] = false ]
    ));
    const switchedObj = Object.fromEntries(switchedArr);
    setSectionToShow(switchedObj);
    localStorageManager.set('sectionToShow', switchedObj);
  };

  const saveAndReset = () => {
    const reset = { 
      score: 0,
      triesLeft: 4, 
      timeLeft: 25,
    };
    setGameProgress(reset);
    localStorageManager.set('gameProgress', reset);
  };

  const generateMathContainerDelayed = (ms=900) => {
    if (!playingAnimation) {
      setPlayingAnimation(true); 
      setTimeout(() => {
        setPlayingAnimation(false);
        generateMathContainer();
        localStorageManager.set('playingAnimation', false);
      }, ms);
    }
  };

  const updateTimer = () => {
    let updatedProgress = null;
    if (!gameProgress.timeLeft && gameProgress.triesLeft < 2) {
      updatedProgress = { 
        ...gameProgress, 
        triesLeft: gameProgress.triesLeft - 1,
      };
    } else if (!gameProgress.timeLeft) {
      generateMathContainer();
      updatedProgress = {
        ...gameProgress, 
        triesLeft: gameProgress.triesLeft - 1, 
        timeLeft: 25,
      };
    } else {
      updatedProgress = { 
        ...gameProgress, 
        timeLeft: gameProgress.timeLeft - 1 
      };
    }
    setGameProgress(updatedProgress);
    localStorageManager.set('gameProgress', updatedProgress);
  };

  const generateMathContainer = () => {
    // ======== helpers =========
    const randomize = (from, to) => {
      return Math.round(Math.random() * (to - from) + from);
    };

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    // ====== /helpers ==========

    const min = gameSettings.minNumber;
    const max = gameSettings.maxNumber;
    const exprLength = Number(gameSettings.expressionLength);
    const choseOperators = gameSettings.choseOperator;

    let newExpression = '';
    for (let i = 0; i < exprLength + 1; i++) {
      const randNumber = randomize(min, max);

      if (randNumber === 0) {
        i--;
        continue;
      } else if (randNumber < 0) {
        newExpression += `(${randNumber})`
      } else {
        newExpression += randNumber;
      }

      for (let j = 0; j < 1; j++) {
        if (i >= exprLength) {
          break;
        }
        const randIdx = randomize(0, choseOperators.length - 1);
        newExpression += ` ${choseOperators[randIdx]} `;
      }
    }

    // eslint-disable-next-line
    const newResult = Math.round(eval(newExpression));

    const newVariants = [];
    newVariants.push(newResult);

    for (let i = 0; i < 5; i++) {
      let from = newResult - 10 * String(newResult).length;
      let to = newResult + 10 * String(newResult).length;
      
      if (from > to) {
        [to, from] = [from, to];
      }

      const randNumber = randomize(from, to);
      if (newVariants.includes(randNumber)) {
        i--;
      } else {
        newVariants.push(randNumber);
      }
    }

    shuffle(newVariants);

    const newMathContainer = {
      ...mathContainer,
      expression: newExpression, 
      correctAnswerIdx: newVariants.indexOf(newResult),
      variants: newVariants,
    };

    setMathContainer(newMathContainer);
    localStorageManager.set('mathContainer', newMathContainer);
  };
  
  const defineUserAnswer = idx => {

    // ===== helpers ======
    const calcScore = () => {
      const initScore = 25;

      let extraScore = Math.round(
        (gameSettings.maxNumber - gameSettings.minNumber) / 6
      ); 
      if (gameSettings.chooseOperator === '*') {
        extraScore = Math.round(extraScore * 1.3);
      }
      if (gameSettings.expressionLength > 1) {
        extraScore = Math.round(extraScore * 1.5);
      }
      return { score: gameProgress.score + initScore + extraScore };
    };
    // ===================

    if (playingAnimation) {
      return;
    }
    let sound = null;
    let gameProgressUpd = null;
    if (mathContainer.correctAnswerIdx === idx) {
      sound = soundCorrect;
      gameProgressUpd = calcScore();
    } else {
      sound = soundIncorrect;
      gameProgressUpd = { triesLeft: gameProgress.triesLeft - 1 };
    }
    playSound(sound);

    const progressUpdated = { ...gameProgress, ...gameProgressUpd, timeLeft: 25 };
    setGameProgress(progressUpdated);
    localStorageManager.set('gameProgress', progressUpdated);

    setMathContainer({ ...mathContainer, userAnswerIdx: idx });
  };

  const regulateAudioVolume = data => {
    const [target, value] = data;
    const valueConverted = value / 10;
    const regulated = { ...audioSettings, [target]: valueConverted };
    setAudioSettings(regulated);
    localStorageManager.set('audioSettings', regulated);
  };

  const setNumbersRange = data => {
    const [target, value] = data;
    const minNum = 'minNumber';
    const maxNum = 'maxNumber';
    
    const min = gameSettings.minNumber;
    const max = gameSettings.maxNumber;

    if ((target === minNum && value >= max)
      || (target === maxNum && min >= value)
      || (value > 999 || value < -999)) {
      return;
    }
    const updatedSettings = { ...gameSettings, [target]: Number(value) };
    setGameSettings(updatedSettings)
    localStorageManager.set('gameSettings', updatedSettings);
  };
  
  const setExpressionLength = length => {
    const lengthSet = { ...gameSettings, expressionLength: length };
    setGameSettings(lengthSet);
    localStorageManager.set('gameSettings', lengthSet);
  };

  const chooseOperator = oper => {
    const newSettings = { ...gameSettings, choseOperator: oper };
    setGameSettings(newSettings);
    localStorageManager.set('gameSettings', newSettings);
  };

  const context = {
    switchSection,
    closeSections,
    generateMathContainer,
    defineUserAnswer,
    regulateAudioVolume,
    setNumbersRange,
    setExpressionLength,
    generateMathContainerDelayed,
    chooseOperator,
    updateTimer,
    saveAndReset,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};