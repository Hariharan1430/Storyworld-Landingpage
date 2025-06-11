import React from 'react';
import '../styles/BorderImage1.css';
import borderImage from '../assests/background-pattern-top.svg'; // your local image path

const BorderImageBox: React.FC = () => {
  return (
    <div className="border-image-wrapper">
      <img src={borderImage} alt="Decorative Border" className="border-image" />
    </div>
  );
};

export default BorderImageBox;