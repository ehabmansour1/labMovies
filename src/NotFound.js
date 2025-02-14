import React, { useEffect } from "react";
import "./NotFound.css"; // Move the CSS into a separate file

const NotFound = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {};

    document.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      const container = document.querySelector(".container");
      const randomOffset = Math.random() * 10 - 5;
      if (container) {
        container.style.transform = `translateX(${randomOffset}px)`;

        setTimeout(() => {
          container.style.transform = "translateX(0)";
        }, 100);
      }
    }, 5000);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="not-found">
      <div className="glitch-effect"></div>
      <div className="container">
        <svg className="forbidden-sign" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#ffa97a"
            strokeWidth="5"
          />
          <line
            x1="25"
            y1="25"
            x2="75"
            y2="75"
            stroke="#ffa97a"
            strokeWidth="5"
          />
        </svg>
        <h1>404</h1>
        <div className="message">Page Not Found</div>
        <p>Sorry, but the page you're looking for does not exist.</p>
        <a href="/" className="back-button">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
