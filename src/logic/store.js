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

  const [expression, setExpression] = useState(
    localStorageManager.get('expression', {
      expression: '',
      result: '',
    })
  );

  const context = {
    sectionToShow,
    setSectionToShow,

    expression,
    setExpression,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};