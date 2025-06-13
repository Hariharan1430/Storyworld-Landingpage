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
    alt: 'AI story generation icon'
  },
  {
    icon: readIcon,
    title: 'Read Stories',
    description: 'Enjoy beautifully formatted stories with an immersive reading experience designed for maximum enjoyment.',
    alt: 'Read stories icon'
  },
  {
    icon: audionarrationIcon,
    title: 'Audio Narration',
    description: 'Listen to your stories with high-quality AI narration, perfect for on-the-go entertainment or relaxation.',
    alt: 'Audio narration icon'
  },
  {
    icon: shareIcon,
    title: 'Share & Connect',
    description: 'Share your favorite stories with friends and family, building connections through the power of storytelling.',
    alt: 'Share and connect icon'
  },
  {
    icon: likeIcon,
    title: 'Like & Save',
    description: 'Show appreciation for stories you love and build your personal collection of favorites.',
    alt: 'Like and save icon'
  },
  {
    icon: instantcreationIcon,
    title: 'Instant Creation',
    description: 'Get your stories generated instantly with our lightning-fast AI processing technology.',
    alt: 'Instant creation icon'
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
              <div className="feature-icon-container">
                <img 
                  src={feature.icon} 
                  alt={feature.alt}
                  className="feature-icon"
                  loading="lazy"
                />
              </div>
              <div className="feature-text-box">
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