import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import '../../styles/component/secondSection/secondSection.css';

gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
  useEffect(() => {
    // GSAP timeline for animating the span elements within .large-text
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-title",  // The title will trigger the animation
        start: "top 80%",  // Start animation when top of the title is 80% from top of the viewport
        end: "top 20%",    // End when the title reaches 20% from the top
        toggleActions: "play none none reset",  // Control the animation playback when scrolling
      },
    });

    // Animate each span inside .large-text
    tl.from(".large-text span", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,  // Stagger the animation for smoothness
    });
  }, []);

  return (
    <section id="about" className="second-section">
      <div className="stats-container">
        <div className="stat-box">
          <img
            src="/images/secondSection/Icon akar-heart.svg"
            alt="Heart Icon"
            className="heart-icon"
          />
          <p className="stat-number">200</p>
          <p className="stat-text">Animals saved</p>
        </div>
        <div className="stat-box">
          <img
            src="/images/secondSection/Icon akar-heart.svg"
            alt="Heart Icon"
            className="heart-icon"
          />
          <p className="stat-number">33</p>
          <p className="stat-text">Animals find new home</p>
        </div>
        <div className="stat-box">
          <img
            src="/images/secondSection/Icon akar-heart.svg"
            alt="Heart Icon"
            className="heart-icon"
          />
          <p className="stat-number">33</p>
          <p className="stat-text">Animals sterilized</p>
        </div>
        <div className="stat-box">
          <img
            src="/images/secondSection/Icon akar-heart.svg"
            alt="Heart Icon"
            className="heart-icon"
          />
          <p className="stat-number">120</p>
          <p className="stat-text">Volunteers Joined</p>
        </div>
      </div>

      <div className="main-content">
        <div className="curved-decoration">
          <img
            src="/images/secondSection/curved-line.svg"
            alt="Curved Decoration"
          />
        </div>

        <div className="curved-decoration-2">
          <img
            src="/images/secondSection/curved-line.svg"
            alt="Curved Decoration-2"
          />
        </div>

        <div className="main-title">
          <img
            src="/images/secondSection/dogwomen.png"
            alt="Doggirl"
            className="dog-women-image"
          />

          <div className="large-text">
            <span className="image-box">
              <img
                src="/images/secondSection/dogwomen.png"
                alt="Dogwomen"
              />
            </span>
            <span>WE HAVE</span>
          </div>

          <div className="large-text">
            <span>A DEEP LOVE</span>
            <span className="image-box">
              <img
                src="/images/secondSection/catwomen.png"
                alt="Catwomen"
              />
            </span>
          </div>

          <div className="large-text">
            <span className="image-box">
              <img
                src="/images/secondSection/dog2.png"
                alt="Dog 2"
              />
            </span>
            <span>FOR ANIMAL</span>
          </div>
        </div>

        <div className="svg-heart">
          <img
            src="/images/secondSection/Icon akar-heart.svg"
            alt="Heart Icon"
          />
        </div>

        <div className="svg-paw-top-left">
          <img
            src="/images/secondSection/paw.svg"
            alt="Paw Icon"
          />
        </div>

        <div className="svg-paw-top-right">
          <img
            src="/images/secondSection/paw.svg"
            alt="Paw Icon"
          />
        </div>

        <div className="svg-paw-bottom-left">
          <img
            src="/images/secondSection/dark paw.svg"
            alt="Paw Icon"
          />
        </div>

        <p className="description-text">
          We are committed to rescuing and rehabilitating animals, giving them a second chance at life.
          Our mission exists to ensure every animal receives the care, love, and respect they deserve.
          With compassion at our core, we aim to transform their lives and build a brighter future for them.
        </p>

        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }}
        >
          Let's Connect
        </motion.button>
      </div>
    </section>
  );
};

export default SecondSection;