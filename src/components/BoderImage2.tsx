import React from 'react';
import '../styles/BorderImage2.css';
import borderImage from '../assests/background-pattern-bottom.svg'; 

const BorderImageBox2: React.FC = () => {
  return (
    <div className="border-image-wrapper">
      <img src={borderImage} alt="Decorative Border" className="border-image" />
    </div>
  );
};

export default BorderImageBox2;