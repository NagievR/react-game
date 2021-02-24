import React from "react";

const OperatorsChoose = () => {
  return(
    <form className='operators-choose'>
      Choose operators:
      <br />
      <span className='option'>
        <input type="checkbox" value="" />
          &nbsp;addition<br />
      </span>
      <span className='option'>
        <input type="checkbox" value="" />
          &nbsp;subtraction<br /> 
      </span>
      <span className='option'>
        <input type="checkbox" value="" />
          &nbsp;multiplication<br /> 
      </span>
      <span className='option'>
        <input type="checkbox" value="" />
          &nbsp;division
      </span>
   </form>
  );
};

export default OperatorsChoose;