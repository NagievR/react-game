import React, { useState, useContext } from 'react';
import { localStorageManager } from './local-storage-manager';

const Context = React.createContext();
export default function useStore() {
  return useContext(Context);
}

export const StoreProvider = ({ children }) => {

  const [sectionToShow, setSectionToShow] = useState(
    localStorageManager.get('sectionToShow', {
      gameField: false,
      settings: false,
      keyboardInfo: false,
      gameOver: false,
    })
  );

  const [mathContainer, setMathContainer] = useState(
    localStorageManager.get('mathContainer', {
      expression: null,
      correctAnswerIdx: null,
      userAnswerIdx: null,
      variants: [],
    })
  );

  const [audioSettings, setAudioSettings] = useState(
    localStorageManager.get('audioSettings', {
      musicVolume: 1,
      soundVolume: 1,
    })
  );

  const [gameProgress, setGameProgress] = useState(
    localStorageManager.get('gameProgress', {
      timeLeft: 5,
      triesLeft: 2,
      score: 0,
    })
  );

  const [gameSettings, setGameSettings] = useState(
    localStorageManager.get('gameSettings', {
      minNumber: 1,
      maxNumber: 20,
      expressionLength: '1',
      choseOperator: '+',
    })
  );

  const [playingAnimation, setPlayingAnimation] = useState(
    localStorageManager.get('playingAnimation', false)
  );

  const context = {
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
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};