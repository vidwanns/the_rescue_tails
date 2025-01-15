"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../../styles/component/firstSection/firstSection.css";
import gsap from "gsap";

const creatorsData = [
  { name: "img_1" },
  { name: "img_2" },
  { name: "img_3" },
  { name: "img_4" },
  { name: "img_5" },
  { name: "img_6" },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getImageSrc = (name) => `/images/firstSection/${name}.png`;

const FirstSection = () => {
  const [shuffledCreators, setShuffledCreators] = useState([]);
  const cardsRef = useRef(null);

  useEffect(() => {
    const shuffledData = shuffleArray([...creatorsData]);
    setShuffledCreators(shuffledData);
  }, []);

  useEffect(() => {
    const cardsContainer = cardsRef.current;
    if (!cardsContainer) return;

    const totalWidth = cardsContainer.scrollWidth;

    gsap.to(cardsContainer, {
      x: -totalWidth / 2,
      duration: 50,
      repeat: -1,
      ease: "linear",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)), // Smooth transition back to start
      },
    });
  }, [shuffledCreators]);

  useEffect(() => {
    // Add Google Tag script dynamically
    const gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-HQDPLG656Q";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-HQDPLG656Q');
    `;
    document.head.appendChild(inlineScript);

    return () => {
      // Cleanup: remove scripts when component unmounts
      document.head.removeChild(gtagScript);
      document.head.removeChild(inlineScript);
    };
  }, []);

  return (
    <section id="home" className="first-section">
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

        <div className="scroller">
          <div className="cards" ref={cardsRef}>
            {/* Render shuffled creators */}
            {shuffledCreators.map((creator, index) => (
              <div key={index} className="cardContainer">
                <img
                  src={getImageSrc(creator.name)}
                  alt={creator.name}
                  className="card"
                />
              </div>
            ))}
            {/* Duplicate the shuffled creators to create a seamless loop */}
            {shuffledCreators.map((creator, index) => (
              <div key={`duplicate-${index}`} className="cardContainer">
                <img
                  src={getImageSrc(creator.name)}
                  alt={creator.name}
                  className="card"
                />
              </div>
            ))}
            {shuffledCreators.map((creator, index) => (
              <div key={`duplicate-${index}`} className="cardContainer">
                <img
                  src={getImageSrc(creator.name)}
                  alt={creator.name}
                  className="card"
                />
              </div>
            ))}
          </div>
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
            <motion.button className="donate-button">Donate</motion.button>
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
        <div className="curved-arrow-text">
          <p>Rescued</p>
          <p>Dogs and pets</p>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
