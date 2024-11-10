import { motion } from "framer-motion";
import Link from "next/link";
import '../../styles/component/layout/nav.css';

const Nav = ({ isOpen, closeMenu }) => {
  return (
    <motion.div
      className="custom-mobile-nav"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="header_logo_nav">
        <img src="/images/header/logo.svg" alt="The Rescue Tails Logo" />
      </div>
      <div className="custom-close-icon" onClick={closeMenu}>
  <span>&times;</span>
</div>

      <nav className="custom-nav-links">
        <div className="custom-nav-link-wrapper">
          <Link href="#home" passHref><div className="custom-nav-link">Home</div></Link>
        </div>
        <div className="custom-nav-link-wrapper">
          <Link href="#about" passHref><div className="custom-nav-link">About Us</div></Link>
        </div>
        <div className="custom-nav-link-wrapper">
          <Link href="#how-to-help" passHref><div className="custom-nav-link">How to Help</div></Link>
        </div>
        <div className="custom-nav-link-wrapper">
          <Link href="#volunteer" passHref><div className="custom-nav-link">Volunteer</div></Link>
        </div>
        <div className="custom-nav-link-wrapper">
          <Link href="#adopt" passHref><div className="custom-nav-link">Adopt</div></Link>
        </div>
        <div className="custom-nav-link-wrapper">
          <Link href="#contacts" passHref><div className="custom-nav-link">Contacts</div></Link>
        </div>
        <div className="custom-nav-link-wrapper">
          <Link href="#say-hello" passHref><div className="custom-nav-link">Say Hello!</div></Link>
        </div>
      </nav>
      <div className="custom-buttons">
        <div className="custom-button custom-donate-button">
          Donate
          <img
            src="/images/header/arrow-up-right.svg"
            alt="Arrow Icon"
            className="arrow-icon"
          />
        </div>
        <div className="custom-button custom-community-button">
          Community
          <img
            src="/images/header/arrow-up-right.svg"
            alt="Arrow Icon"
            className="arrow-icon"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
