import React from "react";

export const Example = (props) => {
  const numbers = props.data;

  return (
    <>
      <div className="new-array">
        Example div{" "}
        {numbers.map((number, index) => (
          <div key={index}>{number * 2} </div>
        ))}
      </div>
      <div className="new-array">Passing data from Parent to Child</div>
    </>
  );
};
