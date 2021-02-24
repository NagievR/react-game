import React from "react";

const ModalWrap = ({ children }) => {
  return(
    <div className='modal-wrap'>
      <div className='modal-inner'>
        {children}
      </div>
    </div>
  );
};

export default ModalWrap;