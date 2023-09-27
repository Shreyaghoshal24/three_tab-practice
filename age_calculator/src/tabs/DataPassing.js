import React, { useState } from "react";
import ChildComponent from "../components/ChildComponent";

const DataPassing = () => {
  const [data, setData] = useState("");

  const handleDataClick = (newData) => {
    setData(newData);
  };

  return (
    <div className="agecalculator"> 
      <h2>Data Passing</h2>
      <ChildComponent onDataClick={handleDataClick} />
      {data ? <p className="childcomponent">Data from child component: {data}</p> : null}
    </div>
  );
};

export default DataPassing;