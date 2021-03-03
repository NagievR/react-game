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
    setExpressionLength,
    generateMathContainerDelayed,
    chooseOperator,
    updateTimer,
    resetGame,
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
      case consts.expressionLength:
        setExpressionLength(payload);
        break;
      case consts.newMathContainerDelayed:
        generateMathContainerDelayed();
        break;
      case consts.chooseOperator:
        chooseOperator(payload);
        break;
      case consts.updateTimer:
        updateTimer();
        break;
      case consts.gameOver: 
        resetGame();
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