import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Discover</h3>
          <ul className="footer-links">
            <li>
              <a href="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                Movies
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                  <path d="M17 2l-5 5-5-5" />
                </svg>
                TV Shows
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                New Releases
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul className="footer-links">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul className="footer-links">
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 POPCIMA. All rights reserved.</p>
        <div className="social-links">
          <a href="" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
