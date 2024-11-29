import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "../../styles/component/layout/nav.css";

const Nav = ({ isOpen, closeMenu }) => {
  // Variants for the menu container
  const containerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  // Variants for the links
  const linkVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08, // Slightly staggered animation for smoother flow
        duration: 0.5, // Longer duration for a smoother transition
        ease: [0.42, 0, 0.58, 1], // Cubic bezier for a polished feel
      },
    }),
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
    },
  };

  // Animation for the logo and close button
  const headerVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  // Function to smoothly scroll to the About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      closeMenu(); // Close the mobile menu after clicking
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="custom-mobile-nav"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
        >
          {/* Logo and Close Button */}
          <motion.div
            className="header_logo_nav"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <img src="/images/header/logo.svg" alt="The Rescue Tails Logo" />
            <div className="custom-close-icon" onClick={closeMenu}>
              <span>&times;</span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <nav className="custom-nav-links">
            {[
              "Home",
              "About Us",  // Link this to second section
              "How to Help",
              "Volunteer",
              "Adopt",
              "Contacts",
              "Say Hello!",
            ].map((link, index) => (
              <motion.div
                key={link}
                className="custom-nav-link-wrapper"
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link
                  href={link === "About Us" ? "#" : `#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  passHref
                >
                  <div 
                    onClick={link === "About Us" ? scrollToAbout : closeMenu} 
                    className="custom-nav-link"
                  >
                    {link}
                  </div>
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Nav;
