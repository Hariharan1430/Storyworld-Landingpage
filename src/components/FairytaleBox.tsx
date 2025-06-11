import React from "react";
import "../styles/Fairytale.css";
import LineImage from '../assests/line1.svg'
import LeftSideImage from '../assests/mobile-mockup3.png'

const FairytaleBox: React.FC = () => {
  return (
    <section className="fairytale-box" aria-label="Create Your Own AI Fairytale">
      <div className="header-section">
        <h2>
          <span className="highlight">Build</span> Your Own <span className="highlight">Fairytale</span> with <span className="highlight">AI</span>
        </h2>
        <img src={LineImage} alt="Decorative curve line" className="curve-line" />
      </div>

      <div className="description-section">
        <p>
          Your child can be the star of their very own personalized story, selecting unique characters and professions that make the adventure uniquely theirs.
        </p>
      </div>

      <div className="content-box">
        <div className="left-container">
          <img src={LeftSideImage} alt="Fairytale app screenshot" className="story-image" />
        </div>

        <div className="right-container">
          {[
            {
              id: '01',
              title: 'Enter Your Prompt',
              text: 'Describe the story you want – characters, setting, theme, or just a simple idea.',
            },
            {
              id: '02',
              title: 'AI Creates Magic',
              text: 'Our advanced AI processes your prompt and crafts a unique, engaging story just for you.',
            },
            {
              id: '03',
              title: 'Enjoy & Share',
              text: 'Read, listen to, like, and share your story with friends and the community.',
            },
          ].map((step, index) => (
            <div className="step-box" key={step.id}>
              <div className="step-number">{step.id}</div>
              <div className="step-text">
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FairytaleBox;