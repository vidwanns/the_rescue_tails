import React from 'react';
import '../../styles/component/fifthSection/fifthSection.css';

const FifthSection = () => {
    return (
      <section className="fifth-section container">

        {/* <img src="/images/fifthSection/bone.svg" alt="Top Left Icon 1" className="svg-icon top-left-1" /> */}
        <img src="/images/fifthSection/org-bone.svg" alt="Top Left Icon 2" className="svg-icon top-left-2" />
        <img src="/images/fifthSection/bone.svg" alt="Top Right Icon" className="svg-icon top-right" />
        <img src="/images/fifthSection/yellow-bone.svg" alt="Bottom Right Icon" className="svg-icon bottom-right" />
        <img src="/images/fifthSection/lines.svg" alt="Line SVG" className="line-svg bottom-left" />

        <div className="fifth_content">
          <div className="top-row">
            <img src="/images/fifthSection/nb-girl1.png" alt="Woman with pets" className="top-image" />
            
            <div className="instagram-card">
              {/* Placeholder for Instagram SVG Icon */}
              <div className="new-icon-space">
              <img src="/images/fifthSection/insrtagram-icon.svg" alt="instagram-icon" className="instagram-icon" />
              </div>

              <p className="instagram-text">See more in our Instagram</p>
              <p className="instagram-handle">@headsfortails</p>
            </div>
            
            <img src="/images/fifthSection/nb-girl6.png" alt="Woman with dog" className="top-image" />
          </div>
          <div className="bottom-row">
            <img src="/images/fifthSection/nb-girl2.png" alt="Woman with coffee and dog" className="bottom-image" />
            <img src="/images/fifthSection/nb-girl3.png" alt="Cat being pet" className="bottom-image" />
            <img src="/images/fifthSection/nb-girl4.png" alt="Dog paw in hand" className="bottom-image" />
            <img src="/images/fifthSection/nb-girl5.png" alt="Dog in jacket" className="bottom-image" />
          </div>
        </div>
      </section>
    );
};

export default FifthSection;
