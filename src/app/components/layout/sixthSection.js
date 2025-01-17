import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../styles/component/sixthSection/sixthSection.css";

const SixthSection = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const images = imagesRef.current;
    const totalImages = images.length;
    const duration = 4; // Duration each image stays fully visible
    const transitionDuration = 1; // Duration of fade transition

    images.forEach((img, i) => {
      gsap.to(img, {
        opacity: 1,
        duration: transitionDuration,
        delay: i * (duration + transitionDuration),
        repeat: -1,
        yoyo: true,
        repeatDelay: (totalImages - 1) * (duration + transitionDuration),
      });
    });
  }, []);


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
    <section id="volunteer" className="sixth-section">
      <div id="community">
        <div id="contact">
          <div className="outer-container">
            <div className="decorative-elements">
              <div className="left-text">
                <h4>CONTACTS</h4>
                <h1>Get in Touch</h1>
              </div>
              <div className="right-svg">
                <img
                  src="/images/sixthSection/dog-svg.svg"
                  alt="Dog SVG"
                  className="dog-svg"
                />
                <img
                  src="/images/sixthSection/curve-line.svg"
                  alt="Curved Line"
                  className="curve-line"
                />
              </div>
            </div>

            <div className="container1">
              {/* Add id="say-hello" to this div to ensure scrolling works */}
              <div id="say-hello" className="contact-form">
                <h3>Say Hello!</h3>
                <p>
                  Have questions, want to be a volunteer, or partner? We'd love to
                  hear from you! Contact us and we’ll get back to you as soon as
                  possible.
                </p>

                <form>
                  <div className="input-group">
                    <div className="input-field">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" />
                    </div>
                    <div className="input-field">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" />
                    </div>
                  </div>

                  <div className="input-group">
                    <div className="input-field">
                      <label htmlFor="phone">Phone</label>
                      <input type="text" id="phone" />
                    </div>

                    <div className="input-field">
                      <label htmlFor="topic">Topic</label>
                      <div className="dropdown-container">
                        <select id="topic">
                          <option>Choose topic</option>
                          <option value="volunteer">Volunteer</option>
                          <option value="partner">Adopt</option>
                          <option value="support">Support</option>
                        </select>
                        <span className="dropdown-arrow">
                          <img
                            src="/images/sixthSection/dropDown-icon.svg"
                            alt="Dropdown Arrow"
                            style={{ width: "16px", height: "16px" }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="input-field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5"></textarea>
                  </div>

                  <button type="submit" className="send-btn">
                    <img
                      src="/images/sixthSection/send-icon.svg"
                      alt="Send Icon"
                      className="send-icon"
                    />
                    Send
                  </button>
                </form>
              </div>

              <div className="contact-info">
                <div className="contact-images">
                  {[ "image1.png", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg" ].map((src, index) => (
                    <img
                      key={index}
                      ref={(el) => (imagesRef.current[index] = el)}
                      src={`/images/sixthSection/${src}`}
                      alt={`Contact Image ${index + 1}`}
                      className="contact-image"
                    />
                  ))}
                </div>

                <div className="info-details">
                  <div className="info-item">
                    <hr className="info-line" />
                    <div className="info-icon-text">
                      <img
                        src="/images/sixthSection/mail-icon.svg"
                        alt="Mail Icon"
                        className="info-icon"
                      />
                      <p className="info-label">Email</p>
                    </div>
                    <div className="info-text">
                      <p>support@therescuetail.org</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <hr className="info-line" />
                    <div className="info-icon-text">
                      <img
                        src="/images/sixthSection/icons8-x.svg"
                        alt="Twitter Icon"
                        className="info-icon"
                      />
                      <p className="info-label">Twitter</p>
                    </div>
                    <div className="info-text">
                      {/* Placeholder for Twitter */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
