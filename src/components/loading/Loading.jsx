import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import "./loading.css";

export default function Loading({ onFinish }) {
  const logoRef = useRef(null);

  useEffect(() => {
    // Animate logo drawing
    const logo = logoRef.current;
    const pathLength = logo.getTotalLength();

    logo.style.strokeDasharray = pathLength;
    logo.style.strokeDashoffset = pathLength;

    gsap.to(logo, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Floating animation
    const floatAnim = gsap.to(".preloader svg", {
      y: -20,
      rotation: 360,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      transformOrigin: "50% 50%",
    });

    // Animate background dots
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => {
      gsap.to(dot, {
        x: "+=" + (Math.random() * 100 - 50),
        y: "+=" + (Math.random() * 100 - 50),
        duration: 3 + Math.random() * 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });

    // Simulate loading finish
    const timer = setTimeout(() => {
      floatAnim.kill();
      gsap.to(".preloader", {
        opacity: 0,
        duration: 1,
        onComplete: onFinish,
      });
    }, 4000);

    return () => {
      clearTimeout(timer);
      floatAnim.kill();
    };
  }, [onFinish]);

  // Generate background dots
  const dotElements = Array.from({ length: 20 }).map((_, i) => (
    <div
      key={i}
      className="dot"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
      }}
    />
  ));

  return (
    <div className="preloader">
      {dotElements}
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon
          ref={logoRef}
          points="50,10 90,90 10,90"
          fill="transparent"
          stroke="white"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}
