import React, { useContext } from "react";
import useHandlers from "./handlers.js";
import * as consts from "./consts.js";

const Context = React.createContext();
export default function useDefineAction() {
  return useContext(Context);
}

export const DefineActionProvider = ({ children }) => {

  const { 
    switchSection,
    closeSections,
    generateMathExpression,
  } = useHandlers();

  const defineAction = action => {
    if (consts.sectionsFlags.includes(action)) {
      switchSection(action);
    }
    switch (action) {
      case consts.close:
        closeSections();
        break;

      case consts.newMathExpression:
        generateMathExpression();
        break;

      default:
        break;
    }
  };

  return (
    <Context.Provider value={{defineAction}}>
      {children}
    </Context.Provider>
  );
};