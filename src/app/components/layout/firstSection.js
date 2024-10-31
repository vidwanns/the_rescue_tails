"use client"; // Ensures this is a client-side component for Next.js

import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "../../styles/component/firstSection/firstSection.css";
import gsap from 'gsap';


const FirstSection = () => {
  return (
    <section className="first-section">
      {/* Left Icons */}
      <img
        src="/images/firstSection/pawLeft.svg"
        alt="Paw left"
        className="paw-icon left"
      />
      <img
        src="/images/firstSection/bone.svg"
        alt="Bone icon"
        className="bone-icon"
      />

      <div className="content">
        
        <h1 className="first-section-title">
          A Haven of Love for <span className="highlight_1">Cats and Dogs</span>
        </h1>
        <p className="first-section-description">
          The Rescuing Tails is a dedicated rescue center committed to providing
          a safe haven for dogs and cats in need. We offer love, care, and
          rehabilitation, helping every furry friend find their forever home.
        </p>

        <div className="images-container">
          {["img_1.png", "img_2.png", "img_3.png", "img_4.png", "img_5.png", "img_6.png"].map((img, index) => (
            <motion.img
              key={index}
              src={`/images/firstSection/${img}`}
              alt={`Rescued pet ${index + 1}`}
              className="pet-image"
              initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly below
              animate={{ opacity: 1, y: 0 }} // Fade in and move to its original position
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation for each image
            />
          ))}
        </div>

        <div className="donate-section">
          <div className="left-align">
            <p className="donate-text">Send it with</p>
            <img
              src="/images/firstSection/curved-arrow-2.svg"
              alt="Curved arrow"
              className="curved-arrow-icon-2"
            />
          </div>
          <div className="donate-button-wrapper">
            {/* Framer Motion for Donate Button */}
            <motion.button
              className="donate-button"
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              Donate
            </motion.button>
          </div>
        </div>
      </div>

      {/* Right Icons */}
      <img
        src="/images/firstSection/pawRight.svg"
        alt="Paw right"
        className="paw-icon right"
      />
      <div className="curved-arrow-section">
        <img
          src="/images/firstSection/curved-arrow.svg"
          alt="Curved arrow"
          className="curved-arrow-icon"
        />
        <div className="curved-arrow-text"> <p>Rescued</p><p>Dogs and pets</p> </div>
      </div>
    </section>
  );
};

export default FirstSection;
