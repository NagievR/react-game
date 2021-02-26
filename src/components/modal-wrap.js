import React from "react";
import useDefineAction from "../logic/define-action";
import { close } from "../logic/consts.js";

const ModalWrap = ({ children }) => {

  const { defineAction } = useDefineAction();

  const handleCloseClick = () => {
    defineAction(close);
  };

  return(
    <div className='modal-wrap'>
      <div className='modal-content'>
        <div onClick={handleCloseClick} className='modal-close' />
        {children}
      </div>
    </div>
  );
};

export default ModalWrap;