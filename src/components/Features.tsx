import React from 'react';
import '../styles/Features.css';
import titleIcon from '../assests/line1.svg';
import decoration from "../assests/circle1.svg";
import aiStoryIcon from '../assests/ai story generation.svg';
import audionarrationIcon from '../assests/audio naration.svg';
import instantcreationIcon from '../assests/instant creation.svg';
import likeIcon from '../assests/like and save.svg';
import readIcon from '../assests/read stories.svg';
import shareIcon from '../assests/share&connect.svg';

const features = [
  {
    icon: aiStoryIcon,
    title: 'AI Story Generation',
    description: 'Simply provide a prompt and watch as our advanced AI creates unique, engaging stories tailored to your imagination.',
  },
  {
    icon: audionarrationIcon,
    title: 'Read Stories',
    description: 'Enjoy beautifully formatted stories with an immersive reading experience designed for maximum enjoyment.',
  },
  {
    icon: instantcreationIcon,
    title: 'Audio Narration',
    description: 'Listen to your stories with high-quality AI narration, perfect for on-the-go entertainment or relaxation.',
  },
  {
    icon: likeIcon,
    title: 'Share & Connect',
    description: 'Share your favorite stories with friends and family, building connections through the power of storytelling.',
  },
  {
    icon: readIcon,
    title: 'Like & Save',
    description: 'Show appreciation for stories you love and build your personal collection of favorites.',
  },
  {
    icon: shareIcon,
    title: 'Instant Creation',
    description: 'Get your stories generated instantly with our lightning-fast AI processing technology.',
  },
];

const FeatureBox: React.FC = () => {
  return (
    <section className="featurebox-wrapper" aria-labelledby="features-heading">
      <img 
        src={decoration} 
        alt="" 
        className="decorativeimg" 
        role="presentation"
        loading="lazy"
      />
      
      <div className="featurebox-container">
        <header className="featurebox-header">
          <h2 id="features-heading" className="gradient-text">
            Key Features of <span>Storyworld AI</span>
          </h2>
          <img 
            src={titleIcon} 
            alt="" 
            className="curved-line" 
            role="presentation"
            loading="lazy"
          />
        </header>

        <div className="featurebox-content" role="list">
          {features.map((feature, index) => (
            <article 
              key={index} 
              className="feature-item"
              role="listitem"
            >
              <div className="feature-text-box">
                <img 
                  src={feature.icon} 
                  alt="" 
                  className="feature-icon"
                  role="presentation"
                  loading="lazy"
                />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBox;