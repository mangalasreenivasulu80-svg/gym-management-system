import "./Footer.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-box">
          <h2>🏋️ Gym Management</h2>

          <p>
            Transform your fitness journey with certified trainers,
            modern equipment, and personalized workout programs.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt className="icon" />
            Hyderabad, Telangana, India
          </p>

          <p>
            <FaPhoneAlt className="icon" />
            +91 9876543210
          </p>

          <p>
            <FaEnvelope className="icon" />
            gym@gmail.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Gym Management System. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;