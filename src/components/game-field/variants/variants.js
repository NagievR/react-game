import React from "react";
import Variant from "./variant";

const Variants = () => {
  
  const variants = [42,2,56,42,67,23];
  return(
    <div className='variants'>
      {variants.map((el, i) => (
        <Variant key={i} elem={el} />
      ))}
    </div>
  );
};

export default Variants;