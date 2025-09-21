import React, { useState, useEffect, useRef } from "react";
import ImageSlider from "./ImageSlider";
import img1 from "../image/first-page.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImagesSliders = () => {
  const slides = [
    { url: img1, title: "beach" },
    { url: img1, title: "boat" },
    { url: img1, title: "forest" },
    { url: img1, title: "city" },
    { url: img1, title: "italy" },
  ];

  const [parentWidth, setParentWidth] = useState(900);
  const sliderRef = useRef(null);

  const updateWidth = () => {
  const screenWidth = window.innerWidth;
  let width;

  if (screenWidth > 1200) {
    width = 900;
  } else if (screenWidth > 770) {
    width = screenWidth * 0.7;
  } else {
    width = screenWidth * 0.8;
  }

  setParentWidth(width);
};


  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // GSAP fade-in to match main page
  useEffect(() => {
    if (!sliderRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(sliderRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sliderRef);
    return () => ctx.revert();
  }, []);

  const containerStyles = {
    width: `${parentWidth}px`,
    height: `${parentWidth * 0.46}px`,
    margin: "0 auto",
    marginTop: "20px",
  };

  return (
    <div ref={sliderRef}>
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={parentWidth} />
      </div>
    </div>
  );
};

export default ImagesSliders;
