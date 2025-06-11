import React from "react";
import "../styles/TeachBox.css";
import storyImage from "../assests/mobile-withlogo1.png"; // Make sure the image is placed correctly

const TeachChildren: React.FC = () => {
  return (
    <section className="teach-section" aria-labelledby="teach-heading">
      <div className="teach-box">
        {/* Box 1: Heading and SEO-friendly description */}
        <div className="teach-heading-box">
          <h2 id="teach-heading">
            <span>Teach children </span>
            <span className="highlight">valuable lessons</span>
          </h2>
        </div>

        {/* Box 2: Image */}
        <div className="teach-image-box">
          <img src={storyImage} alt="Cartoon character with a mobile app interface" />
        </div>

        {/* Box 3: Text description */}
        <div className="teach-description-box">
          <p>
            Storyworld generates stories that are not only entertaining but also embedded
            with important life lessons. The app offers a wide range of stories that cover
            topics such as honesty, kindness, courage, empathy, and responsibility, among
            others. With Storyworld, children can learn important morals in a fun and
            exciting way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeachChildren;
