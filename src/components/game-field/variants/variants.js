import React from "react";
import Variant from "./variant";
import { newMathExpression } from "../../../logic/consts.js";
import useDefineAction from "../../../logic/define-action";

const Variants = () => {

  const { defineAction } = useDefineAction();  

  const handleClick = () => {
    defineAction(newMathExpression);
  };
  
  // tmp const
    const variants = ['42','2','56','42','67','23']; 
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