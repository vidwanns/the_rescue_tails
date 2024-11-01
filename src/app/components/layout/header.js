"use client"; // Ensure this is a client-side component

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Link from "next/link";
import "../../styles/component/layout/header.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollThreshold] = useState(10); // Minimal scroll threshold for smoother toggling

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (Math.abs(window.scrollY - lastScrollY) > scrollThreshold) {
          // Hide header when scrolling down, show when scrolling up
          setIsVisible(window.scrollY < lastScrollY || window.scrollY < 10);
          setLastScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollThreshold]);

  return (
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
          <motion.div className="button contact" whileHover={{ scale: 1.05 }}>
            <span>Contact Us</span>
          </motion.div>

          <motion.div
  className="button donate"
  onHoverStart={(e) => {}}
  onHoverEnd={(e) => {}}
>
  <span>Donate</span>
  <img
    src="/images/header/arrow-up-right.svg"
    alt="Arrow Icon"
    className="arrow-icon"
  />
</motion.div>

        </div>
      </div>
    </motion.header>
  );
};

export default Header;
