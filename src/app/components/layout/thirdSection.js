import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import pet from "../../../../public/jai_ho.json";
import "../../styles/component/thirdSection/thirdSection.css";

// Dynamically import the Lottie component to run only on the client-side
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ThirdSection = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const floatVariant = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setTranslateX((prev) => Math.max(prev - 100, -200)),
    onSwipedRight: () => setTranslateX((prev) => Math.min(prev + 100, 0)),
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

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
    <section id="how-to-help" className="third-section">
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

      <motion.div
        className="content-container"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="image-container" variants={fadeInVariant}>
          <img
            src="/images/ThirdSection/dog-laying.png"
            alt="Rescue Dog"
            className="dog-image"
          />
          <motion.h2 className="third-section-title" variants={fadeInVariant}>
            How to help?
          </motion.h2>
        </motion.div>

        <div className="text-container">
          <motion.p
            className="third-section-description"
            variants={fadeInVariant}
          >
            If you have extra time on your hand and would like to help, please
            consider volunteering! Rescue groups need dedicated volunteers to
            help with events, fundraisers, home checks, transport, etc. All of
            these things help enable the rescue to expand their network and help
            more dogs in need.
          </motion.p>

          <div
            className="button-group-wrapper"
            {...(isMobile ? swipeHandlers : {})}
            style={{ overflowX: "hidden" }}
          >
            <div
              className="button-group"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: "transform 0.3s ease",
              }}
            >
              {[ 
                { text: "Adopt", icon: "/images/ThirdSection/fox1.svg" },
                { text: "Foster", icon: "/images/ThirdSection/home2.svg" },
                { text: "Volunteer", icon: "/images/ThirdSection/food_volunteer.png" },
                { text: "Donate", icon: "/images/ThirdSection/hand4.svg" },
              ].map((btn, index) => (
                <motion.button
                  key={index}
                  className={`help-button ${btn.text.toLowerCase()}`}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    src={btn.icon}
                    alt={`${btn.text} Icon`}
                    className="button-icon"
                  />
                  {btn.text}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.p className="adoption-info" variants={fadeInVariant}>
            If you are looking to add a furry companion to your family, please
            consider adopting instead of buying. When you adopt, you are saving
            not one life but two. Once a dog in our program is adopted, we can
            save another in its place, therefore two lives will be saved! Click
            here to view our adoptables!
          </motion.p>

          <motion.a
            href="#adoptables"
            className="adoptables-link"
            variants={fadeInVariant}
          >
            Check Adoptables
            <span className="arrowCta"></span>
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="donation-graphic-container"
        variants={fadeInVariant}
      >
        <img
          src="/images/ThirdSection/tailup-dog.svg"
          alt="tailup-dog"
          className="dog-icon-above-graphic"
        />
        <div className="new-container">
          <motion.h3 className="donation-title">
            See How Your Donation <span className="highlight">Transforms</span>{" "}
            Lives!
          </motion.h3>
          <div className="donation-journey">
            <Lottie
              animationData={pet}
              loop={true}
              className="lottie-animation"
              style={{ position: "absolute" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ThirdSection;
