import React from "react";
import PropTypes from "prop-types";

const NumberRange = ({ name, id, handleChange, value }) => {
  return(
    <div className='multiply-setting-wrap'>
      <form className='number-range'>
        <span>{`${name}:`}</span>
        <input 
          id={id} 
          value={value}
          onChange={handleChange}
          type="number"
          maxLength="4"
          max="999"
          min="-999"
        />
      </form>
    </div>
  );
};

NumberRange.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.number
};

export default NumberRange;