import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import ToggleOnOutlined from '@mui/icons-material/ToggleOnOutlined';
import { ToggleOffOutlined } from "@mui/icons-material";


const Header = () => {
  const {theme, handleOnClick} = useContext(ThemeContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Age Calculator</Link>
        </li>
        <li>
          <Link to="/datapassing">Data From Child To Parent</Link>
        </li>
        <li>
          <Link to="/table">Table</Link>
        </li>
        <li>
          <p onClick={handleOnClick}>
          {theme === "dark" ? <ToggleOnOutlined style={{fontSize:'3.5rem', cursor:'pointer'}}/> : <ToggleOffOutlined style={{fontSize:'3.5rem', cursor:'pointer'}} />}   
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Header;