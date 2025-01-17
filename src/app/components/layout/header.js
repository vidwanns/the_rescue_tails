"use client"; // Ensure this is a client-side component

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Link from "next/link";
import "../../styles/component/layout/header.css";
import Nav from "./nav";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollThreshold] = useState(10); // Minimal scroll threshold for smoother toggling
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the current screen width is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Run check on mount and on resize
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    // Only handle scroll on mobile screens
    const handleScroll = () => {
      if (isMobile && typeof window !== "undefined") {
        if (Math.abs(window.scrollY - lastScrollY) > scrollThreshold) {
          // Hide header when scrolling down, show when scrolling up
          setIsVisible(window.scrollY < lastScrollY || window.scrollY < 10);
          setLastScrollY(window.scrollY);
        }
      }
    };

    // Add event listeners
    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      // Clean up event listeners
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [isMobile, lastScrollY, scrollThreshold]);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleMenu = () => setIsNavOpen(!isNavOpen);

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
    <>
      <motion.header
        className="header-container"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <div className="maincontainer header-container">
          <div className="header_logo">
            <img src="/images/header/logo.svg" alt="The Rescue Tails Logo" />
          </div>

          {/* Desktop Navigation Links and Buttons */}
          {!isMobile && (
            <>
              <nav className="nav-links">
                <Link href="#home" passHref>
                  <div>Home</div>
                </Link>
                <Link href="#about" passHref>
                  <div>About</div>
                </Link>
                <Link href="#community" passHref>
                  <div>Community</div>
                </Link>
                <Link href="#volunteer" passHref>
                  <div>Volunteer</div>
                </Link>
                <Link href="#adopt" passHref>
                  <div>Adopt</div>
                </Link>
              </nav>

              <div className="buttons-container">
                <Link href="#contact" passHref>
                  <motion.div
                    className="button contact"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>Contact Us</span>
                  </motion.div>
                </Link>

                <motion.div
                  className="button donate-desktop" /* Unique class for desktop Donate button */
                  whileHover={{ scale: 1.05 }}
                >
                  <span>Donate</span>
                  <img
                    src="/images/header/arrow-up-right.svg"
                    alt="Arrow Icon"
                    className="arrow-icon"
                  />
                </motion.div>
              </div>
            </>
          )}

          {/* Mobile Donate Button and Hamburger Menu */}
          {isMobile && (
            <div className="mobile-buttons">
              {/* Mobile Donate Button */}
              <motion.div
                className="button donate-mobile"
                whileHover={{ scale: 1.05 }}
              >
                <span>Donate</span>
                <img
                  src="/images/header/arrow-up-right.svg"
                  alt="Arrow Icon"
                  className="arrow-icon"
                />
              </motion.div>

              <div className="menu-icon" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </div>
      </motion.header>
      <Nav isOpen={isNavOpen} closeMenu={() => setIsNavOpen(false)} />
    </>
  );
};

export default Header;
