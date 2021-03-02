import React from "react";
import useStore from "../../logic/store";
import { chooseOperator } from "../../logic/consts.js";
import useDefineAction from "../../logic/define-action";

const OperatorsChoose = () => {

  const { gameSettings } = useStore();
  const { defineAction } = useDefineAction();
  
  const handleChange = event => {
    defineAction(chooseOperator, event.target.value);
  };

  return(
    <form className='operators-choose'>
      Choose operators:
      <br />

      <span className='option'>
        <input
          checked={gameSettings.choseOperator === "+"}
          type="radio" 
          value="+" 
          name="operator" 
          onChange={handleChange}
        />
        &nbsp;+ addition<br />
      </span>

      <span className='option'>
        <input
          checked={gameSettings.choseOperator === "-"}
          type="radio" 
          value="-" 
          name="operator" 
          onChange={handleChange}
        />
        &nbsp;- subtraction<br /> 
      </span>

      <span className='option'>
        <input
          checked={gameSettings.choseOperator === "*"}
          type="radio" 
          value="*" 
          name="operator" 
          onChange={handleChange}
        />
        &nbsp;* multiplication<br /> 
      </span>

      <span className='option'>
        <input disabled type="radio" value="/" />
        &nbsp;/ division
      </span>

   </form>
  );
};

export default OperatorsChoose;