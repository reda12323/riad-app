import './Footer.css';
import { FaFacebookF, FaTwitter, FaFlickr, FaLinkedinIn } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-social-icons li", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".footer-of-footer", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer-first-main">
      <div className="footer-social-icons">
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="icon" />
              <span className="icon-name">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
              <span className="icon-name">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.flickr.com" target="_blank" rel="noopener noreferrer">
              <FaFlickr className="icon" />
              <span className="icon-name">Flickr</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="icon" />
              <span className="icon-name">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-line-cut"></div>

      <div className="footer-of-footer">
        © 2025 Riad Romana Marrakech. By BillyStays.
      </div>
    </footer>
  );
};

export default Footer;
