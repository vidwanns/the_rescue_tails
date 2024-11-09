import { motion } from "framer-motion";
import Link from "next/link";
import '../../styles/component/layout/nav.css'; // Updated CSS import

const Nav = ({ isOpen, closeMenu }) => {
  return (
    <motion.div
      className="custom-mobile-nav" // Updated unique class name
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="custom-close-icon" onClick={closeMenu}>
        &times;
      </div>
      <nav className="custom-nav-links">
        <Link href="#home" passHref><div className="custom-nav-link">Home</div></Link>
        <Link href="#about" passHref><div className="custom-nav-link">About Us</div></Link>
        <Link href="#how-to-help" passHref><div className="custom-nav-link">How to Help</div></Link>
        <Link href="#volunteer" passHref><div className="custom-nav-link">Volunteer</div></Link>
        <Link href="#adopt" passHref><div className="custom-nav-link">Adopt</div></Link>
        <Link href="#contacts" passHref><div className="custom-nav-link">Contacts</div></Link>
        <Link href="#say-hello" passHref><div className="custom-nav-link">Say Hello!</div></Link>
      </nav>
      <div className="custom-buttons">
        <div className="custom-button custom-donate-button">Donate</div>
        <div className="custom-button custom-community-button">Community</div>
      </div>
    </motion.div>
  );
};

export default Nav;
