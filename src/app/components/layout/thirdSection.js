"use client"
import React from "react";
import "../../styles/component/thirdSection/thirdSection.css";
import Lottie from "lottie-react";
import pet from "../../../../public/third_sec.json";
const ThirdSection = () => {
  return (
    <section className="third-section">
      {/* SVG Icons */}
      <img src="/images/ThirdSection/whitePawRight.svg" alt="Paw Icon" className="paw-icon-top-right" />
      <img src="/images/ThirdSection/white-bone.svg" alt="Bone Icon" className="bone-icon-left-center" />
      <img src="/images/ThirdSection/pawLeftOrg.svg" alt="Paw Icon" className="paw-icon-below-bone" />

      <div className="content-container">
        <div className="image-container">
          <img
            src="/images/ThirdSection/dog-laying.png"
            alt="Rescue Dog"
            className="dog-image"
          />
        </div>

        <div className="text-container">
          <h2 className="third-section-title">How to help?</h2>
          <p className="third-section-description">
            If you have extra time on your hand and would like to help please
            consider volunteering! Rescue groups need dedicated volunteers to
            help with events, fundraisers, home checks, transport, etc. All of
            these things help enable the rescue to expand their network and help
            more dogs in need.
          </p>

          <div className="button-group">
            <button className="help-button adopt">
              <img src="/images/ThirdSection/fox1.svg" alt="Dog Icon" className="button-icon" />
              Adopt
            </button>
            <button className="help-button foster">
              <img src="/images/ThirdSection/home2.svg" alt="House Icon" className="button-icon" />
              Foster
            </button>
            <button className="help-button volunteer">
              <img src="/images/ThirdSection/foodIcon.svg" alt="Volunteer Icon" className="button-icon" />
              Volunteer
            </button>
            <button className="help-button donate">
              <img src="/images/ThirdSection/hand4.svg" alt="Donate Icon" className="button-icon" />
              Donate
            </button>
          </div>

          <p className="adoption-info">
            If you are looking to add a furry companion to your family, please
            consider adopting instead of buying. When you adopt you are saving
            not one life but two. Once a dog in our program is adopted we are
            able to save another in their place, therefore two lives will be
            saved! Click here to view our adoptables!
          </p>

          <a href="#adoptables" className="adoptables-link">
            Check Adoptables &rarr;
          </a>
        </div>
      </div>

      {/* New Container to Replace Donation Graphic */}
      <div className="donation-graphic-container">
        <img
          src="/images/ThirdSection/tailup-dog.svg"
          alt="tailup-dog"
          className="dog-icon-above-graphic"
        />
        <div className="new-container">
          <h3 className="donation-title">
            See How Your Donation <span className="highlight">Transforms</span> Lives!
          </h3>
          <div className="donation-journey">
            <Lottie animationData={pet} loop={true} style={{ position: "absolute", left: "-100px" }} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThirdSection;
