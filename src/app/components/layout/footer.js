import React from "react";
import "../../styles/component/layout/footer.css";

function Footer() {
  const handleDonateClick = () => {
    console.log("Donate button clicked");
  };

  return (
    <footer id="site-footer" className="footer"> {/* Add id here */}
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
                <p>Awwars and Manchester, Blu</p>
                <p>Pincode-901503</p>
                <p>+999999999999</p>
                <p>hello@gmail.com</p>
              </div>
            </div>

            {/* Donate Button below */}
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
