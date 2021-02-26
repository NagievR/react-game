import React from "react";
import PropTypes from "prop-types";

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

NumberRange.propTypes = {
  name: PropTypes.string,
};

export default NumberRange;