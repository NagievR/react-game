import React from "react";
import ModalWrap from "./modal-wrap";

const KeyboardInfo = () => {
    return(
      <ModalWrap>
        <article className='keyboard-info'>
          <h3>Keyboard info</h3>
          <p>
            Use keys from
            &nbsp;<span className='key-descr'>1</span>&nbsp;
            to
            &nbsp;<span className='key-descr'>6</span>&nbsp;
            then press
            &nbsp;<span className='key-descr'>Enter</span>
            .
          </p>
        </article>     
      </ModalWrap>
    );
  };
  
  export default KeyboardInfo;