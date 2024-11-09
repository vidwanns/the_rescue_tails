"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from '../../styles/component/layout/nav.module.css';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    if (navOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navOpen]);

  const handleLinkClick = (sectionId) => {
    setNavOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={classes.nav} ref={navRef}>
      <div className={classes.navcontainer}>
        <div className={classes.navbar}>
          <div
            className={classes.menu_toggle}
            onClick={() => setNavOpen(!navOpen)}
          >
            {!navOpen ? (
              <svg
                width="35"
                height="12"
                viewBox="0 0 35 12"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.burger}
              >
                <g stroke="white">
                  <g style={{ cursor: "pointer" }}>
                    <path d="M0 2H17" />
                    <path d="M0 6H17" />
                    <path d="M0 10H9" />
                  </g>
                </g>
              </svg>
            ) : (
              <svg
                width="39"
                height="25"
                viewBox="0 0 39 25"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.close}
              >
                <g stroke="#CBBD70">
                  <path d="M6.137 18.157L18.158 6.136" />
                  <path d="M18.867 18.157L6.846 6.136" />
                </g>
              </svg>
            )}

          </div>
        </div>

        <div
          className={`${classes.nav_overlay} container`}
          style={{ display: !navOpen ? "none" : "flex" }}
        >
          <ul className={` ${classes.nav_links}`}>
            <li className={classes.nav_item}>
              <div className={classes.title}>
                <div className={classes.content}>
                  <a
                    className={classes.text}
                    onClick={() => handleLinkClick("Home-section")}
                  >
                    HOME
                  </a>
                  <a
                    className={classes.text}
                    onClick={() => handleLinkClick("AboutUs-section")}
                  >
                    ABOUT US
                  </a>
                  <a
                    className={classes.text}
                    onClick={() => handleLinkClick("service-section")}
                  >
                    SERVICES
                  </a>
                  <a
                    className={classes.text}
                    onClick={() => handleLinkClick("footer-section")}
                  >
                    LOCATION
                  </a>
                  <a
                    className={classes.text}
                    onClick={() => handleLinkClick("contact-section")}
                  >
                    CONTACT US
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
