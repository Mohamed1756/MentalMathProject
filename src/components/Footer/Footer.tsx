import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer:React.FC = () => {
return (
    <footer>
  <div className="footer-container">
     <div className="footer-logo">
          <h4 className="footer-title">Mental Math</h4>
          <p>Become a Mental Math Pro</p>
    </div>
    
    <div className="footer-links">
      <ul>
        <li>
          <Link to="/terms">Terms of Service</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
    <div className="footer-social">
      <ul>
        <li>
          <a href="https://twitter.com/your_business" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/your_business" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>

)
}
export default Footer; 