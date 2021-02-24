import React from "react";
import NumberRange from "./number-range";

const NumbersRangeBlock = () => {

  return(
    <div className='settings-block'> 
      <NumberRange name={'Min number'} />
      <NumberRange name={'Max number'} />
    </div>
  );
};

export default NumbersRangeBlock;