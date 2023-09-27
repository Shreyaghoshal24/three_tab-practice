import React, { useState } from "react";

const ChildComponent = ({ onDataClick }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleClick = () => {
    if (inputData.trim() !== "") {
      onDataClick(inputData);
      setInputData("");
    } else {
      alert("Kindly Enter The Value To The Input Box!");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter data"
        value={inputData}
        maxLength="200"
        onChange={handleInputChange}
      />
      <button onClick={handleClick} className="childButton">
        Send Data
      </button>
    </>
  );
};

export default ChildComponent;