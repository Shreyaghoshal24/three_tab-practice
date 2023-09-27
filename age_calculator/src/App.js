import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AgeCalculator from "./tabs/Calculator";
import DataPassing from "./tabs/DataPassing";
import Table from "./tabs/AgeTable";
import { ThemeContext,themes } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleOnClick = () =>{
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  const body = document.body;

  useEffect(() => {
    switch(theme){
      case themes.light:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        break;
      case themes.dark:
        body.classList.remove("bg-light");
        body.classList.remove("text-dark");
        body.classList.add("bg-dark");
        body.classList.add("text-light");
        break;
      default:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        //react-hooks/exhaustive-deps
    }
  });

  return (
    <ThemeContext.Provider value={{theme, handleOnClick}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AgeCalculator />} />
          <Route path="/datapassing" element={<DataPassing />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>
      </ThemeContext.Provider>
  );
}

export default App;

