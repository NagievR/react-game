import React from "react";
import PropTypes from "prop-types";

const Variant = ({ elem }) => {
  return(
    <div className='variant-wrap'>
      <div className='variant'>
        {elem}
      </div>
    </div>
  );
};

Variant.propTypes = {
  elem: PropTypes.string,
};

export default Variant;