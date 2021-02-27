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
    mathContainer,
    setMathContainer,
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

  const generateMathContainer = () => {
    
    // temporary values: 
      const min = 1;
      const max = 20;
      const choseOperators = ['*', '+', '-', '/'];
      const exprLength = 1;
    // ================


    // ======== helpers =========
    const randomize = (from, to) => {
      return Math.round(Math.random() * (to - from) + from);
    };

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    // ====== /helpers ==========

    let newExpression = '';
    for (let i = 0; i < exprLength + 1; i++) {
      const randNumber = randomize(min, max);

      if (randNumber === 0) {
        i--;
        continue;
      } else if (randNumber < 0) {
        newExpression += `(${randNumber})`
      } else {
        newExpression += randNumber;
      }

      for (let j = 0; j < 1; j++) {
        if (i >= exprLength) {
          break;
        }
        const randIdx = randomize(0, choseOperators.length - 1);
        newExpression += ` ${choseOperators[randIdx]} `;
      }
    }

    // eslint-disable-next-line
    const newResult = Math.round(eval(newExpression));

    const newVariants = [];
    newVariants.push(newResult);

    for (let i = 0; i < 5; i++) {
      let from = newResult - 10 * String(newResult).length;
      let to = newResult + 10 * String(newResult).length;
      
      if (from > to) {
        [to, from] = [from, to];
      }

      const randNumber = randomize(from, to);
      if (newVariants.includes(randNumber)) {
        i--;
      } else {
        newVariants.push(randNumber);
      }
    }

    shuffle(newVariants);

    const newMathContainer = {
      expression: newExpression, 
      correctAnswerIdx: newVariants.indexOf(newResult),
      userAnswerIdx: null,
      variants: newVariants,
    };

    // console.log(newMathContainer);
    setMathContainer(newMathContainer);
    localStorageManager.set('mathContainer', newMathContainer);
  };

  const defineUserAnswer = (idx) => {
    setMathContainer({ ...mathContainer, userAnswerIdx: idx });
    console.log(mathContainer.correctAnswerIdx === idx);
  };

  const context = {
    switchSection,
    closeSections,
    generateMathContainer,
    defineUserAnswer,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};