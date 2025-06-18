import React from 'react';
import Dollimage from "../assests/icon.svg"
import Playstore from "../assests/playstore.svg"
import Ios from "../assests/ios.svg"
import "../styles/CreateStories.css"
import yellowstar from '../assests/star1.svg'
import vilotestar from '../assests/i1.svg'


const CreateStories: React.FC = () => {
  const handleGooglePlayClick = () => {
    window.open(' https://play.google.com/store/apps/details?id=com.sivra.storyworld&pcampaignid=web_share', '_blank');
  };

  const handleAppStoreClick = () => {
    window.open(' https://apps.apple.com/in/app/the-story-world/id6743325945', '_blank');
  };


  
  return (
    <>
      <div className="create-stories-container">
        {/* Decorative Stars */}
        <div className="star star-1">✦</div>
        <div className="star star-2">✧</div>
        {/* <div className="star star-3">✦</div> */}
        {/* <div className="star star-4">✧</div> */}
        {/* <div className="star star-5">✦</div> */}
        {/* <div className="star star-6">★</div> */}
         
        <div className="main-box">
            <img 
                src={vilotestar}
                alt="Yellow Star" 
                className="vilotestar1"
              />
               <img 
                src={vilotestar}
                alt="Yellow Star" 
                className="vilotestar2"
              />
                <img 
                src={vilotestar}
                alt="Yellow Star" 
                className="vilotestar3"
              />
          {/* First Container - Character and Text */}
          <div className="first-container">
            <div className="character-section">
              {/* Replace with your own image */}
              <img 
                src={Dollimage}
                alt="Character" 
                className="character-image"
              />
            </div>
            
            <div className="text-section">
              {/* Yellow star image above CREATE text */}
              <img 
                src={yellowstar}
                alt="Yellow Star" 
                className="yellow-star"
              />
              <h1 className="main-title">
                <span className="letter letter-c">C</span>
                <span className="letter letter-r">R</span>
                <span className="letter letter-e">E</span>
                <span className="letter letter-a">A</span>
                <span className="letter letter-t">T</span>
                <span className="letter letter-e2">E</span>
              </h1>
              <h2 className="sub-title">STORIES WITH AI</h2>
              {/* <div className="sparkle sparkle-1">✨</div> */}
            </div>
          </div>

          {/* Second Container - Download Section */}
          <div className="second-container">
            <span className="download-text">DOWNLOAD</span>
            <div className="arrow">→</div>
            <div className="app-buttons">
              <button 
                className="app-button"
                onClick={handleGooglePlayClick}
              >
                {/* Replace with your Google Play Store image */}
                <img 
                  src={Playstore}
                  alt="Get it on Google Play" 
                  className="app-store-image"
                />
              </button>
              
              <button 
                className="app-button"
                onClick={handleAppStoreClick}
              >
                {/* Replace with your App Store image */}
                <img 
                  src={Ios} 
                  alt="Download on the App Store" 
                  className="app-store-image"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateStories;