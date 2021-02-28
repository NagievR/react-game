import React from "react";
import useDefineAction from "../../../logic/define-action";
import useStore from "../../../logic/store";
import NumberRange from "./number-range";
import { numbersRange } from "../../../logic/consts.js";

const NumbersRangeBlock = () => {

  const { gameSettings } = useStore();
  const { defineAction } = useDefineAction();

  const handleChange = event => {
    const targ = event.target;
    defineAction(numbersRange, [targ.id, targ.value]);
  };

  return(
    <div className='settings-block'> 
      <NumberRange 
        name={'Min number'}
        id={'minNumber'} 
        handleChange={handleChange}
        value={gameSettings.minNumber}
      />
      <NumberRange 
        name={'Max number'}
        id={'maxNumber'} 
        handleChange={handleChange}
        value={gameSettings.maxNumber}
      />
    </div>
  );
};

export default NumbersRangeBlock;