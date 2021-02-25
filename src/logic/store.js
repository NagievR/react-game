import React, { useState, useContext } from 'react';

const Context = React.createContext();
export default function useStore() {
  return useContext(Context);
}

export const StoreProvider = ({ children }) => {

  const [sectionToShow, setSectionToShow] = useState({
    gameField: false,
    settings: false,
    keyboardInfo: false,
  });

  const context = {
    sectionToShow,
    setSectionToShow,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};