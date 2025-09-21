import { useEffect, useRef } from "react";
import "./Slider.css";
import Navbar from "./navbar/Navbar";

export default function Slider() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video autoplay works (fix for some browsers that block it)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay blocked by browser.");
      });
    }
  }, []);

  return (
    <div className="slider-container">
      {/* ✅ Navbar stays on top */}
      <Navbar />

      {/* ✅ Background video */}
      <video
        ref={videoRef}
        className="background-video"
        src="https://villas-riads-marrakech.com/wp-content/themes/bim-wp-blank/static/video-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ✅ Optional overlay for readability */}
      <div className="video-overlay"></div>
    </div>
  );
}






// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import './Slider.css';
// import Navbar from './navbar/Navbar';

// const images = [
//   'https://darchadia.com/wp-content/uploads/2022/06/20220618_111710v2-scaled.jpg',
//   'https://darchadia.com/wp-content/uploads/2022/06/20220618_105811-1024x768.jpg',
//   'https://darchadia.com/wp-content/uploads/2022/06/20220618_110349-1024x768.jpg',
// ];

// export default function Slider() {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const slides = sliderRef.current.children;
//     // Show first slide
//     gsap.set(slides, { opacity: 0 });
//     gsap.set(slides[0], { opacity: 1 });

//     const tl = gsap.timeline({ repeat: -1 });
//     for (let i = 0; i < slides.length; i++) {
//       const nextIndex = (i + 1) % slides.length;
//       tl.to(slides[i], { opacity: 0, duration: 2.5, ease: 'power2.inOut' })
//         .to(slides[nextIndex], { opacity: 1, duration: 2.5, ease: 'power2.inOut' }, '<');
//     }
//   }, []);

//   return (
//     <div className="slider-container">
//       <Navbar />
//       <div className="top-slider" ref={sliderRef}>
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className="slide"
//             style={{ backgroundImage: `url(${src})` }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
