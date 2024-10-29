import React from "react";
import "../../styles/component/layout/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="outer-container-footer">
        <div className="inner-container-footer">
          {/* Logo at the Start */}
          <div className="logo">
            <img src="/images/footer/logo.svg" alt="The Rescue Tails Logo" />
          </div>

          {/* Text in the Bottom Left */}
          <div className="text-left-corner">
            <h1>We Help Homeless Animals to Get a Decent Life!</h1>
          </div>

          {/* Text Content Positioned to the Top */}
          <div className="text-container">
            <div className="text-wrapper">
              {/* Footer Links (Left side of contact) */}
              <div className="footer-links">
                <ul className="links-column">
                  <li>Home</li>
                  <li>Adopt</li>
                  <li>Home</li>
                </ul>
                <ul className="links-column">
                  <li>About Us</li>
                  <li>Contacts</li>
                  <li>How to Help</li>
                </ul>
              </div>

              <div className="vertical-divider"></div>

              {/* Footer Contact at Top Right */}
              <div className="footer-contact">
                <p>Awwars and manchester, blu</p>
                <p>Pincode-901503</p>
                <p>+999999999999</p>
                <p>hello@gmail.com</p>
              </div>
            </div>

            {/* Donate Button below */}
            <div className="footer-donate">
              <button className="donate-btn">
                Donate
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
