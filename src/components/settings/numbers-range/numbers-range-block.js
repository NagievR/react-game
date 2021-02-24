import React from "react";
import NumberRange from "./number-range";

const NumbersRangeBlock = () => {

  return(
    <div className='settings-block'> 
      <NumberRange name={'min number'} />
      <NumberRange name={'max number'} />
    </div>
  );
};

export default NumbersRangeBlock;