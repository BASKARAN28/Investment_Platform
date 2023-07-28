import React from 'react';
import { Link } from "react-router-dom";
import "./Appbar.css";
import AccountMenu from './Icon';
export const AppBar = () => {
  return (
    
    <div style={{ backgroundColor: 'black', height: '64px', display: 'flex', alignItems: 'center', justifyContent:'flex-end', color: 'white' }}>
      <div style={{ alignItems:'center' }}>
        <h1 style={{ marginLeft: 10 }}>HAPPY INVESTMENT</h1>
      </div>
     
     <div className="navbar">
      <div className="links" style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
      
      <Link to="/homee"><h3>HOME</h3></Link>
       <Link to="/log"><h3>LOGIN</h3></Link>  
       <Link to="/Register"><h3>REGISTRATION</h3></Link>
      <Link><AccountMenu /></Link> 
     </div>
   </div>
   </div>
  );
}

export default AppBar;