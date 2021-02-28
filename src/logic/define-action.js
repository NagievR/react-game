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
    generateMathContainer,
    defineUserAnswer,
    regulateAudioVolume,
    setNumbersRange,
  } = useHandlers();

  const defineAction = (action, payload) => {
    if (consts.sectionsFlags.includes(action)) {
      switchSection(action);
    }
    switch (action) {
      case consts.close:
        closeSections();
        break;
      case consts.newMathContainer:
        generateMathContainer();
        break;
      case consts.userAnswer:
        defineUserAnswer(payload);
        break;
      case consts.audioVolume:
        regulateAudioVolume(payload);
        break;
      case consts.numbersRange: 
        setNumbersRange(payload);
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