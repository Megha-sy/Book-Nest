import React, { useEffect, useRef, useState } from "react";
import "./Main1.css";

function Main1() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="home-section" ref={sectionRef}>
      {/* Left Popup Images */}
      <div className={`popup-images left ${isVisible ? "show" : ""}`}>
        <img src="assets/main1/education-ladder-graduation.png" alt="Book 2" className="popup-img angle-left-bottom" />
      </div>

      {/* Quote */}
      <div className="quote-container">
        <h1 className="quote">"A room without books is like a body without a soul."</h1>
        <p className="author">– Marcus Tullius Cicero</p>
      </div>

      {/* Right Popup Images */}
      <div className={`popup-images right ${isVisible ? "show" : ""}`}>
        <img src="assets/main1/bk2.jpg" alt="Book 3" className="popup-img angle-right-top" />
        {/* <img src="assets/Booksimages/The Alchemist.webp" alt="Book 4" className="popup-img angle-right" /> */}
      </div>
    </div>
  );
}

export default Main1;
