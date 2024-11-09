import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/component/fifthSection/fifthSection.css';

gsap.registerPlugin(ScrollTrigger);

const FifthSection = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop Animation
    mm.add("(min-width: 992px)", () => {
      // Initial setup for scattered effect on images
      gsap.set(".top-image, .bottom-image", {
        x: () => gsap.utils.random(-300, 300),
        y: () => gsap.utils.random(-300, 300),
        opacity: 0,
        scale: 0.5,
        rotation: () => gsap.utils.random(-30, 30),
      });

      // Main timeline for images and text
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top 85%",
          end: "top 30%",
          toggleActions: "play none none reset",
        },
      });

      // Animate images into place with bounce
      tl.to(".top-image, .bottom-image", {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        stagger: { each: 0.2 },
        ease: "elastic.out(1, 0.5)",
      });

      // Fade-in effect for Instagram card text with stagger
      tl.from(".instagram-text, .instagram-handle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
      }, "-=0.5"); // Overlap with previous animation

      // Icon rotation effect
      gsap.to(".svg-icon", {
        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        rotation: 15,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    });

    // Cleanup ScrollTrigger instances on unmount
    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="fifth-section container">
      <img src="/images/fifthSection/org-bone.svg" alt="Top Left Icon 2" className="svg-icon top-left-2" />
      <img src="/images/fifthSection/bone.svg" alt="Top Right Icon" className="svg-icon top-right" />
      <img src="/images/fifthSection/yellow-bone.svg" alt="Bottom Right Icon" className="svg-icon bottom-right" />
      <img src="/images/fifthSection/lines.svg" alt="Line SVG" className="line-svg bottom-left" />

      <div className="fifth_content">
        <div className="top-row">
          <img src="/images/fifthSection/nb-girl1.png" alt="Woman with pets" className="top-image" />
          <div className="instagram-card">
            <img src="/images/fifthSection/insrtagram-icon.svg" alt="instagram-icon" className="instagram-icon" />
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