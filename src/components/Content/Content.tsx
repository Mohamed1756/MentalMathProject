import React from "react";
import placeholderImage from '../../assets/images/placeholderImage.jpeg'
// Rest of your code


const Content: React.FC = () => {
    return (
    <div className="container">
    <div className="content">
      <h2>Content Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam erat vel turpis venenatis tempus. Nulla facilisi.</p>
    </div>
    <div className="image-container">
      <img src={placeholderImage} alt="Placeholder" />
    </div>
  </div>
  
    
    );
  }
  export default Content;