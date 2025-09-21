import React, { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";

const ImageSlider = ({ slides, parentWidth }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);
  const timerRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = useCallback(() => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, slides]);

  const goToSlide = (index) => setCurrentIndex(index);

  // Auto slide
  useEffect(() => {
    timerRef.current = setInterval(goToNext, 4000);
    return () => clearInterval(timerRef.current);
  }, [goToNext]);

  // GSAP slide animation
  useEffect(() => {
    if (!slidesRef.current) return;
    gsap.to(slidesRef.current, {
      x: -(currentIndex * parentWidth),
      duration: 0.8,
      ease: "power3.out",
    });
  }, [currentIndex, parentWidth]);

  // GSAP fade-in on mount
  useEffect(() => {
    gsap.from(slidesRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  // Styles
  const sliderStyles = { position: "relative", height: "100%" };
  const slidesContainerStyles = {
    display: "flex",
    width: `${parentWidth * slides.length}px`,
    height: "100%",
  };
  const slideStyles = {
    width: `${parentWidth}px`,
    height: "100%",
    flexShrink: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "12px",
  };
  const slidesContainerOverflowStyles = { overflow: "hidden", height: "100%" };
  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "40px",
    color: "#fff",
    background: "rgba(0,0,0,0.5)",
    padding: "8px 12px",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 2,
    userSelect: "none",
  };
  const leftArrowStyles = { ...arrowStyles, left: "10px" };
  const rightArrowStyles = { ...arrowStyles, right: "10px" };
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginTop: "12px",
  };
  const dotStyle = (active) => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: active ? "#c98664" : "#ddd",
    cursor: "pointer",
    border: active ? "2px solid #fff" : "2px solid #ccc",
    transition: "all 0.3s",
  });

  return (
    <div style={sliderStyles}>
      {/* Arrows */}
      <div onClick={goToPrevious} style={leftArrowStyles}>
        ❰
      </div>
      <div onClick={goToNext} style={rightArrowStyles}>
        ❱
      </div>

      {/* Slides */}
      <div style={slidesContainerOverflowStyles}>
        <div style={slidesContainerStyles} ref={slidesRef}>
          {slides.map((slide, i) => (
            <div
              key={i}
              style={{ ...slideStyles, backgroundImage: `url(${slide.url})` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div style={dotsContainerStyles}>
        {slides.map((_, i) => (
          <div
            key={i}
            style={dotStyle(currentIndex === i)}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
