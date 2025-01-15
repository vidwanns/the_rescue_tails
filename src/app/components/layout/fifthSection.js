import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/component/fifthSection/fifthSection.css";

gsap.registerPlugin(ScrollTrigger);

const FifthSection = () => {
  const bottomRowRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop Animation
    mm.add("(min-width: 992px)", () => {
      gsap.set(".top-image, .bottom-image", {
        x: () => gsap.utils.random(-300, 300),
        y: () => gsap.utils.random(-300, 300),
        opacity: 0,
        scale: 0.5,
        rotation: () => gsap.utils.random(-30, 30),
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top 85%",
          end: "top 30%",
          toggleActions: "play none none reset",
        },
      });

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

      tl.from(
        ".instagram-text, .instagram-handle",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
        },
        "-=0.5"
      );

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

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  useEffect(() => {
    const images = imagesRef.current;
    const totalImages = images.length;
    const duration = 4; // Duration each image stays fully visible
    const transitionDuration = 1; // Duration of fade transition

    images.forEach((img, i) => {
      gsap.to(img, {
        opacity: 1,
        duration: transitionDuration,
        delay: i * (duration + transitionDuration),
        repeat: -1,
        yoyo: true,
        repeatDelay: (totalImages - 1) * (duration + transitionDuration),
      });
    });
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
    <section className="fifth-section container">
      <img
        src="/images/fifthSection/org-bone.svg"
        alt="Top Left Icon 2"
        className="svg-icon top-left-2"
      />
      <img
        src="/images/fifthSection/bone.svg"
        alt="Top Right Icon"
        className="svg-icon top-right"
      />
      <img
        src="/images/fifthSection/yellow-bone.svg"
        alt="Bottom Right Icon"
        className="svg-icon bottom-right"
      />
      <img
        src="/images/fifthSection/lines.svg"
        alt="Line SVG"
        className="line-svg bottom-left"
      />

      <div className="fifth_content">
        <div className="top-row">
          <img
            src="/images/fifthSection/nb-girl1.png"
            alt="Woman with pets"
            className="top-image"
          />
          <div className="instagram-card">
            <img
              src="/images/fifthSection/insrtagram-icon.svg"
              alt="instagram-icon"
              className="instagram-icon"
            />
            <p className="instagram-text">See more in our Instagram</p>
            <p className="instagram-handle">@headsfortails</p>
          </div>
          <img
            src="/images/fifthSection/nb-girl6.png"
            alt="Woman with dog"
            className="top-image"
          />
        </div>

        <div className="bottom-row" ref={bottomRowRef}>
          <img
            src="/images/fifthSection/nb-girl2.png"
            alt="Woman with coffee and dog"
            className="bottom-image"
          />
          <img
            src="/images/fifthSection/nb-girl3.png"
            alt="Cat being pet"
            className="bottom-image"
          />
          <img
            src="/images/fifthSection/nb-girl4.png"
            alt="Dog paw in hand"
            className="bottom-image"
          />
          <img
            src="/images/fifthSection/nb-girl5.png"
            alt="Dog in jacket"
            className="bottom-image"
          />
        </div>
  
      </div>
    </section>
  );
};

export default FifthSection;
