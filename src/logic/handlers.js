import React, { useContext } from 'react';
import { localStorageManager } from './local-storage-manager';
import useStore from './store';

const Context = React.createContext();
export default function useHandlers() {
  return useContext(Context);
}

export const HandlersProvider = ({ children }) => {
  
  const {
    sectionToShow,
    setSectionToShow,
    setMathExpression,
  } = useStore();

  const switchSection = toShow => {
    const switchedArr = Object.entries(sectionToShow).map(field => (
      field[0] === toShow 
      ? [ field[0], field[1] = true ]
      : [ field[0], field[1] = false ]
    ));
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

  const generateMathExpression = () => {
    
    // temporary values: 
      const min = 1;
      const max = 20;
      const choseOperators = ['*', '+', '-', '/'];
      const exprLength = 1;
    // ================

    const randomize = (from, to) => {
      return Math.round(Math.random() * (to - from) + from);
    };

    let expr = '';
    for (let i = 0; i < exprLength + 1; i++) {
      expr += randomize(min, max);

      for (let j = 0; j < 1; j++) {
        if (i >= exprLength) {
          break;
        }
        const randIdx = randomize(0, choseOperators.length - 1);
        expr += choseOperators[randIdx];
      }
    }

    const newExpr = {
      expression: expr, // eslint-disable-next-line
      result: Math.round(eval(expr))
    };

    console.log(newExpr.result);

    setMathExpression(newExpr);
    localStorageManager.set('mathExpression', newExpr);
  };

  const context = {
    switchSection,
    closeSections,
    generateMathExpression,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};