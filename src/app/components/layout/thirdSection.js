"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import pet from "../../../../public/jai_ho.json";
import "../../styles/component/thirdSection/thirdSection.css";

const ThirdSection = () => {
  // Framer Motion Variants
  const floatVariant = {
    animate: { y: [0, -10, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } }
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="third-section">
      {/* Floating SVG Icons */}
      <motion.img
        src="/images/ThirdSection/whitePawRight.svg"
        alt="Paw Icon"
        className="paw-icon-top-right"
        variants={floatVariant}
        animate="animate"
      />
      <motion.img
        src="/images/ThirdSection/white-bone.svg"
        alt="Bone Icon"
        className="bone-icon-left-center"
        variants={floatVariant}
        animate="animate"
      />
      <motion.img
        src="/images/ThirdSection/pawLeftOrg.svg"
        alt="Paw Icon"
        className="paw-icon-below-bone"
        variants={floatVariant}
        animate="animate"
      />

      <motion.div className="content-container" variants={fadeInVariant} initial="hidden" animate="visible">
        <motion.div className="image-container" variants={fadeInVariant}>
          <img src="/images/ThirdSection/dog-laying.png" alt="Rescue Dog" className="dog-image" />
        </motion.div>

        <div className="text-container">
          <motion.h2 className="third-section-title" variants={fadeInVariant}>
            How to help?
          </motion.h2>
          <motion.p className="third-section-description" variants={fadeInVariant}>
            If you have extra time on your hand and would like to help, please consider volunteering! Rescue groups
            need dedicated volunteers to help with events, fundraisers, home checks, transport, etc. All of these
            things help enable the rescue to expand their network and help more dogs in need.
          </motion.p>

          <div className="button-group">
            {[
              { text: "Adopt", icon: "/images/ThirdSection/fox1.svg" },
              { text: "Foster", icon: "/images/ThirdSection/home2.svg" },
              { text: "Volunteer", icon: "/images/ThirdSection/food_volunteer.png" },
              { text: "Donate", icon: "/images/ThirdSection/hand4.svg" }
            ].map((btn, index) => (
              <motion.button
                key={index}
                className={`help-button ${btn.text.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img src={btn.icon} alt={`${btn.text} Icon`} className="button-icon" />
                {btn.text}
              </motion.button>
            ))}
          </div>

          <motion.p className="adoption-info" variants={fadeInVariant}>
            If you are looking to add a furry companion to your family, please consider adopting instead of buying.
            When you adopt, you are saving not one life but two. Once a dog in our program is adopted, we can save
            another in its place, therefore two lives will be saved! Click here to view our adoptables!
          </motion.p>

          <motion.a href="#adoptables" className="adoptables-link" variants={fadeInVariant}>
            Check Adoptables
            <span className="arrowCta"></span>
          </motion.a>
        </div>
      </motion.div>

      {/* Lottie Animation Container */}
      <motion.div className="donation-graphic-container" variants={fadeInVariant}>
        <img src="/images/ThirdSection/tailup-dog.svg" alt="tailup-dog" className="dog-icon-above-graphic" />
        <div className="new-container">
          <motion.h3 className="donation-title">
            See How Your Donation <span className="highlight">Transforms</span> Lives!
          </motion.h3>
          <div className="donation-journey">
            <Lottie
              animationData={pet}
              loop={true}
              style={{ position: "absolute", left: "-100px" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ThirdSection;
