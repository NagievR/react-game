import React from "react";
import useStore from "../../logic/store";

const ExpressionBox = () => {
  
  const { expression } = useStore();

  return (
    <div className='expression-box'>
      <div className='expression'>
        {`${expression.expression}=?`}
      </div>
    </div>
  );
};

export default ExpressionBox;