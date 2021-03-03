import React, { useContext } from 'react';
import { localStorageManager } from './local-storage-manager';
import useStore from './store';
import correct from "../assets/audio/correct.mp3";
import incorrect from "../assets/audio/incorrect.mp3";

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

  const switchSection = toShow => {
    const question = `Skip and go to ${toShow}?`;
    if ((playingAnimation && toShow !== 'gameOver') 
      || (0 && !window.confirm(question))) {
      return;
    } 
    const switchedArr = Object.entries(sectionToShow).map(field => (
      field[0] === toShow 
      ? [ field[0], field[1] = true ]
      : [ field[0], field[1] = false ]
    ));
    resetGame();
    const switchedObj = Object.fromEntries(switchedArr);
    setSectionToShow(switchedObj);
    localStorageManager.set('sectionToShow', switchedObj);
  };

  const closeSections = () => {
    const switchedArr = Object.entries(sectionToShow).map(field => (
      [ field[0], field[1] = false ]
    ));
    const switchedObj = Object.fromEntries(switchedArr);
    setSectionToShow(switchedObj);
    localStorageManager.set('sectionToShow', switchedObj);
  };

  const resetGame = () => {
    const reset = { 
      score: 0, 
      triesLeft: 2, 
      timeLeft: 7,
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
        triesLeft: gameProgress.triesLeft - 1 
      };
    } else if (!gameProgress.timeLeft) {
      generateMathContainer();
      updatedProgress = {
        ...gameProgress, 
        triesLeft: gameProgress.triesLeft - 1, 
        timeLeft: 7 
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
    if (playingAnimation) {
      return;
    }
    let sound = null;
    let gameProgressUpd = null;
    if (mathContainer.correctAnswerIdx === idx) {
      sound = new Audio(correct);
      gameProgressUpd = { score: gameProgress.score + 20 };
    } else {
      sound = new Audio(incorrect);
      gameProgressUpd = { triesLeft: gameProgress.triesLeft - 1 };
    }
    sound.volume = audioSettings.soundVolume;
    sound.play();

    const progressUpdated = { ...gameProgress, ...gameProgressUpd, timeLeft: 7 };
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
    resetGame,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};