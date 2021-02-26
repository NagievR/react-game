import React from "react";
import useDefineAction from "../../../logic/define-action";
import Variant from "./variant";
import { newExpression } from "../../../logic/consts.js";

const Variants = () => {

  const { defineAction } = useDefineAction();  

  const handleClick = () => {
    defineAction(newExpression);
  };
  
  // tmp const
    const variants = [42,2,56,42,67,23]; 
  // =========

  return(
    <div onClick={handleClick} className='variants'>
      {variants.map((el, i) => (
        <Variant key={i} elem={el} />
      ))}
    </div>
  );
};

export default Variants;