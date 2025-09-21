import { useEffect, useRef } from "react";
import TopSlider from "../accueil/topSlider/TopSlider";
import Navbar from "../accueil/slider/navbar/Navbar";
import "./ImageHero.css";
import { gsap } from "gsap";

const ImageHero = ({ backgroundImage, name, costum }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = 500);

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = 500;
    };
    window.addEventListener("resize", handleResize);

    // Mouse position
    const mouse = { x: null, y: null };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    // Circle class
    class Circle {
      constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.baseX = x;
        this.baseY = y;
        this.dx = (Math.random() - 0.5) * 0.3; // ✅ slow horizontal drift
        this.dy = (Math.random() - 0.5) * 0.3; // ✅ slow vertical drift
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();
      }

      update() {
        // Floating drift
        this.x += this.dx;
        this.y += this.dy;

        // Bounce back inside canvas
        if (this.x < 0 || this.x > width) this.dx *= -1;
        if (this.y < 0 || this.y > height) this.dy *= -1;

        // Distance from mouse
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // Repel effect
        if (distance < 100) {
          let angle = Math.atan2(dy, dx);
          let repelForce = (100 - distance) / 3;
          this.x -= Math.cos(angle) * repelForce;
          this.y -= Math.sin(angle) * repelForce;
        }

        this.draw();
      }
    }

    // Create circles
    const circles = [];
    for (let i = 0; i < 40; i++) {
      let x = Math.random() * width;
      let y = Math.random() * height;
      let r = Math.random() * 6 + 3;
      circles.push(new Circle(x, y, r));
    }

    // Animate with GSAP ticker
    gsap.ticker.add(() => {
      ctx.clearRect(0, 0, width, height);
      circles.forEach((c) => c.update());
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <div>
      <div>
        <TopSlider />
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: `center ${costum}`,
          width: "100%",
          height: "500px",
          position: "relative",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* ✅ Floating Circles Canvas */}
        <canvas ref={canvasRef} className="floating-circles"></canvas>

        <span className="name-of-page-ch">{name}</span>
        <Navbar />
      </div>
    </div>
  );
};

export default ImageHero;
