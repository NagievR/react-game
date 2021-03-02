import React from "react";
import Variant from "./variant";
import { newMathContainerDelayed, userAnswer } from "../../../logic/consts.js";
import useDefineAction from "../../../logic/define-action";
import useStore from "../../../logic/store";

const Variants = () => {

  const { defineAction } = useDefineAction();  
  const { mathContainer } = useStore();
  
  const handleClick = event => {
    defineAction(userAnswer, +event.target.id);
    defineAction(newMathContainerDelayed);
  };

  const mapVariants = () => {
    return mathContainer.variants.map((el, idx) => {
      let className = '';

      if (mathContainer.userAnswerIdx !== null) {
        if (idx === mathContainer.userAnswerIdx) {
          className='incorrect-answer';
        }
        if (idx === mathContainer.correctAnswerIdx) {
          className='correct-answer';
        }
      }

      return(
        <Variant
          className={className} 
          handleClick={handleClick}
          idx={String(idx)}
          key={idx} 
          inner={el} 
        />
      );
    });
  };

  return(
    <div className='variants'>
      {mapVariants()}
    </div>
  );
};

export default Variants;