import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
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
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevent default behavior for anchor tag
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      closeMenu(); // Close the mobile menu after clicking
    }
  };

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
            <div
              className="custom-close-icon"
              onClick={closeMenu} // Only close the menu when clicking the close icon
            >
              <span>&times;</span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <nav className="custom-nav-links">
            {[
              "Home",
              "About Us", // Link this to second section
              "How to Help", // Link this to third section
              "Volunteer",
              "Adopt",
              "Contacts", // Link this to the contact section
              "Say Hello!", // Link this to say hello section
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
                  href={
                    link === "About Us"
                      ? "#about"
                      : link === "How to Help"
                      ? "#how-to-help"
                      : link === "Contacts"
                      ? "#contact"
                      : link === "Say Hello!"
                      ? "#say-hello"
                      : `#${link.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  passHref
                >
                  <div
                    onClick={(e) =>
                      link === "About Us"
                        ? scrollToSection(e, "about")
                        : link === "How to Help"
                        ? scrollToSection(e, "how-to-help")
                        : link === "Contacts"
                        ? scrollToSection(e, "contact")
                        : link === "Say Hello!"
                        ? scrollToSection(e, "say-hello")
                        : closeMenu()
                    }
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
