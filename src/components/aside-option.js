import React from "react";

const AsideOption = ({ iconSrc }) => {
  return(
    <div className='aside-option-wrap'>
      <img 
        className='aside-option' 
        src={iconSrc} 
        alt='icon' 
      />
    </div>
  );
};

export default AsideOption;