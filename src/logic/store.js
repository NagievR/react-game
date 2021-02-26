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

  const [mathExpression, setMathExpression] = useState(
    localStorageManager.get('mathExpression', {
      expression: '',
      result: '',
    })
  );

  const context = {
    sectionToShow,
    setSectionToShow,

    mathExpression,
    setMathExpression,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};