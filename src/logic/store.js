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
      timeLeft: 20,
      triesLeft: 3,
      score: 0,
      inGame: false,
    })
  );

  const [gameSettings, setGameSettings] = useState(
    localStorageManager.get('gameSettings', {
      minNumber: 1,
      maxNumber: 50,
      expressionLength: '1',
      choseOperators: ['+', '-']
    })
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
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};