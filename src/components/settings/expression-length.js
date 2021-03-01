import React from "react";
import { expressionLength } from "../../logic/consts.js";
import useDefineAction from "../../logic/define-action.js";
import useStore from "../../logic/store.js";
  
const ThemeChoose = () => {

  const { defineAction } = useDefineAction();
  const { gameSettings } = useStore();

  const handleChange = event => {
    defineAction(expressionLength, event.target.value);
  };
  
  return(
    <div className='settings-block'>
      <form onSubmit={e => e.preventDefault()} >
        <div>Expression length:</div>
        <input 
          checked={gameSettings.expressionLength === '1'}
          type="radio" 
          value="1"
          name="expression-length"
          onChange={handleChange}
        />
        <span className='option'>&nbsp;1 operator</span>
        <br />
        <input 
          checked={gameSettings.expressionLength === '2'}
          type="radio" 
          value="2"
          name="expression-length" 
          onChange={handleChange}
        /> 
        <span className='option'>&nbsp;2 operators</span>
      </form> 
    </div>
  );
};

export default ThemeChoose;