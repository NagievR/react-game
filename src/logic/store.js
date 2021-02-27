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

  const context = {
    sectionToShow, 
    setSectionToShow,
    
    mathContainer, 
    setMathContainer,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};