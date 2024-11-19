import React, { useState, useEffect } from "react";
import "../../styles/component/layout/footer.css";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available to avoid SSR issues
    if (typeof window !== "undefined") {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      handleResize(); // Set initial value on mount
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleDonateClick = () => {
    console.log("Donate button clicked");
  };

  return (
    <footer id="site-footer" className="footer">
      <div className="outer-container-footer">
        <div className="inner-container-footer">
          {/* Logo at the Start */}
          <div className="logo">
            <img src="/images/footer/logo.svg" alt="The Rescue Tails Logo" />
          </div>

          {/* Text in the Bottom Left */}
          <div className="text-left-corner">
            <div className="text-part">We Help</div>
            <div className="text-part">Homeless Animals</div>
            <div className="text-part">to Get a Decent Life!</div>
          </div>

          {/* Text Content Positioned to the Top */}
          <div className="text-container">
            <div className="text-wrapper">
              {/* Footer Links */}
              <div className="footer-links">
                <ul className="links-column">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#adopt">Adopt</a>
                  </li>
                  <li>
                    <a href="#volunteer">Volunteer</a>
                  </li>
                </ul>

                <ul className="links-column2">
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#contacts">Contacts</a>
                  </li>
                  <li>
                    <a href="#help">How to Help</a>
                  </li>
                </ul>
              </div>

              <div className="vertical-divider"></div>

              {/* Footer Contact */}
              <div className="footer-contact">
                <p>Email</p>
                <p>support@therescuetail.org</p>
              </div>
              <div className="footerMobile">
                <p>Contact on:-</p>
                <div className="contactInfo">
                  <div className="email">
                    <img
                      src="/images/footer/mail-icon.svg"
                      alt="Email Icon"
                      className="icon"
                    />
                    <span>support@therescuetail.org</span>
                  </div>
                  <div className="social">
                    <a
                      href="https://x.com/therescuetails"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/footer/x-icon-footer.png"
                        alt="Social Icon"
                        className="xicon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Donate Button */}
            <div className="footer-donate">
              <button className="donate-btn" onClick={handleDonateClick}>
                <span className="button-text">Donate</span>
                <span className="arrow">
                  <img src="/images/footer/donate_arrow.svg" alt="Arrow Icon" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
