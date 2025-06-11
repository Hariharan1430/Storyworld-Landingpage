import React from 'react';
import '../styles/BorderImage2.css';
import borderImage from '../assests/section2-bottomline.svg'; 

const BorderImageBox3: React.FC = () => {
  return (
    <div className="border-image-wrapper">
      <img src={borderImage} alt="Decorative Border" className="border-image" />
    </div>
  );
};

export default BorderImageBox3;