import React  from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";



function Navbar() {


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Telecom 
          <Icons.FaBroadcastTower />
        </Link>
           <ul className="nav-items">
           
             {navItems.map((item) => {
               return(
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
               );
            
          })}
        </ul> 
       </nav>
    </>
  );
}

export default Navbar;