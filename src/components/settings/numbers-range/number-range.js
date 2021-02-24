import React from "react";

const NumberRange = ({ name }) => {
  return(
    <div className='multiply-setting-wrap'>
      <form className='number-range'>
        <label htmlFor='range'>{`${name}:`}</label>
        <input id='range' type="number" />
      </form>
    </div>
  );
};

export default NumberRange;