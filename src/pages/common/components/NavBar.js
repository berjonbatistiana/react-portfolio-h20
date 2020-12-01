import React from "react";

export function NavBar() {
  
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <a id="nav-home-link" className="nav-link active" href="#"
          >Bermond Jon Batistiana</a
          >
        </li>
      </ul>
    
      <ul className="nav justify-content-end nav-bar-right">
        <li className="nav-item">
          <a className="nav-link active" href="/"
          >About<span className="border-right"/></a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" href="/portfolio"
          >Portfolio<span className="border-right"/></a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" href="/contacts">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
