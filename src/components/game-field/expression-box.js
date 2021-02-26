import React from "react";
import useStore from "../../logic/store";

const ExpressionBox = () => {
  
  const { mathExpression } = useStore();

  return (
    <div className='expression-box'>
      <div className='expression'>
        {`${mathExpression.expression}=?`}
      </div>
    </div>
  );
};

export default ExpressionBox;