import React from "react";
import PropTypes from "prop-types";

const Variant = ({ inner, className, idx, handleClick }) => {
  return(
    <div className={`variant-wrap ${className}`} onClick={handleClick}>
      <div id={idx} className='variant'>
        {inner}
      </div>
    </div>
  );
};

Variant.propTypes = {
  inner: PropTypes.number,
  className: PropTypes.string,
  idx: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Variant;