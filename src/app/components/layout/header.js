'use client'; // Ensure this is a client-side component

import { motion } from 'framer-motion'; // Import motion from framer-motion
import Link from 'next/link';
import '../../styles/component/layout/header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className='maincontainer header-container'>
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
        {/* Framer Motion for Contact Us Button */}
        <motion.div
          className="button contact"
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          contact us
        </motion.div>

        {/* Framer Motion for Donate Button */}
        <motion.div
          className="button donate"
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          Donate
          <img
            src="/images/header/arrow-up-right.svg"
            alt="Arrow Icon"
            className="arrow-icon"
          />
        </motion.div>
      </div>
      </div>
    </header>
  );
};

export default Header;
