import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      
      {/* LEFT SECTION */}
      <div className="social-text">
        <h3>PORSCHE</h3>

        <p>
          If the values are given as ranges, these do not relate to a single,
          individual vehicle and do not constitute part of the offer. They are
          intended solely as a means of comparing different vehicle models and
          refer to the product portfolio available on the German market.
        </p>

        {/* Social Icons */}
        <div className="icons">
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.x.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        {/* Back to Top Button */}
        <a href="#home" className="back-btn">
          <button>BACK TO TOP</button>
        </a>

        <p className="copyright">© 2025 Porsche</p>
      </div>

      {/* RIGHT SECTION */}
      <div className="legal">
        <h3>Legal</h3>
        <ul>
          <li>Privacy</li>
          <li>Terms of Service</li>
          <li>Lawyer's Corner</li>
        </ul>
      </div>

    </div>
  );
}

export default Footer;
