import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MainPage.css";
import img1 from "./image/first-page.jpg";
import ImagesSliders from "./imgslider/ImagesSliders";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text blocks
      gsap.utils.toArray(".fade-up").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Animate image
      gsap.from(".img1", {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".img1",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate features list (stagger)
      gsap.from(".second-part-2 li", {
        x: -30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".second-part-2",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="complete-page-main" ref={mainRef}>
      {/* First Section */}
      <div className="first-part-main">
        <div className="child-part-main fade-up">
          <div className="part-main-div">
            <span className="span">Bonjour</span>
          </div>
          <h2 className="fade-up">
            Bienvenue à Riad Romana, votre refuge d'exception au cœur de Marrakech
          </h2>
          <p className="fade-up">
            Nous sommes enchantés de vous accueillir dans notre havre de paix, où chaque détail
            a été pensé avec soin pour vous offrir une expérience inoubliable. Que vous soyez en
            quête d'une escapade romantique, d'un séjour en famille ou d'un moment de détente entre amis,
            Riad Romana est votre sanctuaire privé.
            <br /><br />
            Imaginez-vous plongeant dans une piscine scintillante sous le soleil doux du Maroc,
            savourant des plats exquis de la cuisine locale dans le confort de votre propre riad,
            et vous relaxant dans des chambres magnifiquement décorées qui allient charme traditionnel
            et commodités modernes.
            <br /><br />
            Notre équipe dévouée est là pour vous offrir un service personnalisé, anticipant vos moindres
            besoins et s'assurant que chaque instant de votre séjour soit empreint de luxe et de confort.
            <br /><br />
            Bienvenue chez vous, bienvenue à Riad Romana.
          </p>
        </div>

        <div className="part-main-2-div fade-up">
          <img className="img1" src={img1} alt="First Page" />
          <div className="part-main-3-div">
            <Link to="/reserver">
              <button>
                <i className="vc_btn3-icon fas fa-calendar-check"></i> Réserver maintenant
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="second-part-main">
        <div className="second-part-1 fade-up">
          <div className="second-part-1-two">
            <h4>
              BIENVENUE CHEZ VOUS, NOUS SOMMES IMPATIENTS DE RENDRE VOTRE SÉJOUR INOUBLIABLE
            </h4>
          </div>
          <br />
          <ImagesSliders />
        </div>

        <div className="second-part-2 fade-up">
          <ul>
            <li>Chambres</li>
            <li>Lits</li>
            <li>Cuisine</li>
            <li>Salle de sport</li>
            <li>Salle de cinéma</li>
            <li>Piscine</li>
            <li>Chauffage</li>
            <li>Wi-Fi Internet</li>
            <li>TV</li>
            <li>Pour familles/enfants</li>
            <li>Produits de base</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
