import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/component/fourthSection/fourthSection.css";

gsap.registerPlugin(ScrollTrigger);

const FourthSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".fourth-section",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reset",
      },
    });

    // Floating and rotation for icon images
    gsap.to(".top-right-icon, .bottom-right-icon, .top-left-icon, .bottom-left-icon", {
      y: 10,
      rotation: 10,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    // Staggered fade-in and bounce for animal images
    tl.from(".animal-img", {
      opacity: 0,
      y: 50,
      scale: 0.8,
      duration: 1.2,
      ease: "elastic.out(1, 0.3)",
      stagger: 0.2,
    });

    // Slide and fade in for text content
    tl.from(".text-content h1", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    }).from(".text-content p", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5"); // Overlap with the previous animation

    // Button animation with hover effect
    gsap.fromTo(
      ".meet-furry-button",
      { scale: 0.9 },
      {
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reset",
        },
      }
    );

    // Arrow icon rotation on hover
    gsap.fromTo(
      ".arrow img",
      { rotation: 0 },
      {
        rotation: 20,
        duration: 0.3,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      }
    );
  }, []);

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
    <div id="adopt" className="fourth-section">
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
