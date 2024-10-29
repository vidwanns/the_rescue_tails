import React from 'react';
import '../../styles/component/fourthSection/fourthSection.css';

const FourthSection = () => {
  return (
    <div className="fourth-section">
      <div className="vertical-text">Journey to Home</div> 
      <img src="/images/fourthSection/org-bone.svg" alt="top-right-icon" className="top-right-icon" /> 
      <img src="/images/fourthSection/ball.svg" alt="bottom-right-icon" className="bottom-right-icon" /> 
      <img src="/images/fourthSection/white-bone.svg" alt="top-left-icon" className="top-left-icon" /> 
      <img src="/images/fourthSection/pawLeftOrg.svg" alt="bottom-left-icon" className="bottom-left-icon" /> 

      <div className="content-section">
        <img src="/images/fourthSection/blob.png" alt="green blob" className="green-blob" />
        <div className="animal-images">
          <img src="/images/fourthSection/cat-1.png" alt="White Cat" className="animal-img white-cat" />
          <img src="/images/fourthSection/dog-2.png" alt="Dog" className="animal-img brown-dog" />
          <img src="/images/fourthSection/dog-3.png" alt="Black Dog" className="animal-img black-dog" />
          <img src="/images/fourthSection/cat-4.png" alt="Black Cat" className="animal-img black-cat" />
        </div>
        <div className="text-content">
          <h1>Find Your Furry Friends</h1>
          <p>Begin your Adoption Journey Today</p>
        </div>
        <div className="button-container">
          <button className="meet-furry-button">
            <span>Meet the Furry</span> 
            <span className="arrow">
              <img src="/images/fourthSection/arrow-right.svg" alt="arrow icon" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
