import React from "react";
import { Link } from "react-router-dom";

// Add an empty export statement at the top of the file
//export {};

const Header:React.FC = () =>{
    return (
        <header>
          <div className="header-container">
            <h4 className="title">Your Title</h4>
            <nav>
              <ul className="nav-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to= "../../pages/Features">Features</Link>
                </li>
                <li>
                  <Link to="/aboutpage">About</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
}
export default Header;

