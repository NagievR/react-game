import React from "react";

const NumberRange = ({ name }) => {
  return(
    <div className='multiply-setting-wrap'>
      <form className='number-range'>
        <span>{`${name}:`}</span>
        <input type="number" />
      </form>
    </div>
  );
};

export default NumberRange;