import Logo from "../img/logo.png";
import Koushik from "../img/koushik.png";
import React from "react";
import "./navbar.css";


function Navbar() {
  return (
    <div className='App'>
        <div className="nav">
             <img className="img" src={Logo} />
             <ul className="unorder">
        <li>
          <a href="/Vendor details">Vendor Details</a>
        </li>
        <li>
          <a href="/Statutory Details">Statutory Details</a>
        </li>
        <li>
          <a href="/Compliance Details">Compliance Details</a>
        </li>
        <li>
          <a href="/Bank Details">Bank Details</a>
        </li>
      </ul>
      <img className="img1" src={Koushik} />
        </div>
        
    </div>
  )
}

export default Navbar;