'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import '../../styles/component/secondSection/secondSection.css';

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="stats-container">
        <div className="stat-box">
          <img src="/images/secondSection/Icon akar-heart.svg" alt="Heart Icon" className="heart-icon" />
          <p className="stat-number">200</p>
          <p className="stat-text">Animals saved</p>
        </div>
        <div className="stat-box">
          <img src="/images/secondSection/Icon akar-heart.svg" alt="Heart Icon" className="heart-icon" />
          <p className="stat-number">33</p>
          <p className="stat-text">Animals find new home</p>
        </div>
        <div className="stat-box">
          <img src="/images/secondSection/Icon akar-heart.svg" alt="Heart Icon" className="heart-icon" />
          <p className="stat-number">33</p>
          <p className="stat-text">Animals sterilized</p>
        </div>
        <div className="stat-box">
          <img src="/images/secondSection/Icon akar-heart.svg" alt="Heart Icon" className="heart-icon" />
          <p className="stat-number">120</p>
          <p className="stat-text">Volunteers Joined</p>
        </div>
      </div>

      <div className="main-content">
        <div className="curved-decoration">
          <img src="/images/secondSection/curved-line.svg" alt="Curved Decoration" />
        </div>

        <div className="curved-decoration-2">
          <img src="/images/secondSection/curved-line.svg" alt="Curved Decoration-2" />
        </div>

        {/* Main Title with Images and Text */}
        <div className="main-title">
          <div className="large-text">
            <span className="image-box">
              <img src="/images/secondSection/dogwomen.png" alt="Dogwomen" />
            </span>
            <span>WE HAVE</span>
          </div>

          <div className="large-text">
            <span>A DEEP LOVE</span>
            <span className="image-box">
              <img src="/images/secondSection/catwomen.png" alt="Catwomen" />
            </span>
          </div>

          <div className="large-text">
            <span className="image-box">
              <img src="/images/secondSection/dog2.png" alt="Dog 2" />
            </span>
            <span>FOR ANIMAL</span>
          </div>
        </div>

        {/* Heart SVG */}
        <div className="svg-heart">
          <img src="/images/secondSection/Icon akar-heart.svg" alt="Heart Icon" />
        </div>

        {/* Paw SVG */}
        <div className="svg-paw-top-left">
          <img src="/images/secondSection/paw.svg" alt="Paw Icon" />
        </div>

        <div className="svg-paw-top-right">
          <img src="/images/secondSection/paw.svg" alt="Paw Icon" />
        </div>

        <div className="svg-paw-bottom-left">
          <img src="/images/secondSection/dark paw.svg" alt="Paw Icon" />
        </div>

        <p className="description-text">
          We are committed to rescuing and rehabilitating animals, giving them a second chance at life.
          Our mission exists to ensure every animal receives the care, love, and respect they deserve.
          With compassion at our core, we aim to transform their lives and build a brighter future for them.
        </p>

        {/* CTA Button with Framer Motion */}
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }} // Animation on hover
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          Let's Connect
        </motion.button>
      </div>
    </section>
  );
};

export default SecondSection;