import React from "react";
import { Link } from "react-router-dom";
import logo from './logo-dlk.png';

function Header() {
  
  return (
    <div>
      <nav>
        <div className="color-block mb-3 mx-auto rounded-circle z-depth-1">
          <div className="bg-primary brand-logo title">
          <img src={logo} width={250} alt="Logo" /> 
          </div>
          <ul className="right hide-on-med-and-down title">
            <li>
              <Link to="/login" className="waves-effect button winter black-text waves-dark btn">
                Login
              </Link>
              <Link to="/login" className="waves-effect button accent-2 black-text waves-dark btn">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
