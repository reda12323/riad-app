import { useEffect, useRef } from "react";
// import ResButton from '../reservebutton/ResButton';
import './MainPage.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const riad1 = "https://darchadia.com/wp-content/uploads/2022/06/20220618_111710v2-scaled.jpg";
const riad2 = "https://images.squarespace-cdn.com/content/v1/5f7f580e2a273179f84ceaee/1724261993520-M5RGINVFCYPOBSGR9V22/riad-sakkan3.jpg?format=750w";
const riad3 = "https://images.squarespace-cdn.com/content/v1/5f7f580e2a273179f84ceaee/1724261997735-1B3AQ58GLJWKCUNMMLUJ/riad-sakkan1.jpg?format=750w";

const MainPage = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up all text and sections
      gsap.utils.toArray(".fade-up").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Animate images separately
      gsap.utils.toArray(".fade-img").forEach((el) => {
        gsap.from(el, {
          scale: 1.2,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="complete-page-main-1" ref={mainRef}>

      {/* Section 1 */}
      <div className="big-part-phase-1 fade-up">
        <p className="medu-part-phase-1-1 fade-up">
          Plongez dans l’élégance et le raffinement au cœur de la majestueuse Marrakech, où le Riad Romana vous accueille dans une oasis de luxe. 
          Niché au sein d’un cadre exceptionnel, ce riad de prestige offre bien plus qu’un simple séjour : il vous propose une expérience unique, où le confort s’harmonise avec l’authenticité marocaine.
        </p>
        <div className="medu-part-phase-1-2 fade-img" style={{ backgroundImage: `url(${riad1})` }} />
      </div>

      {/* Section 2 */}
      <div className="big-part-phase-2 fade-up">
        <div className="medu-part-phase-2-1">
          <p className="small-part-phase-2-1 fade-up" style={{fontFamily:'"Josefin Sans", Arial, Helvetica, sans-serif', fontSize:'14px', color:'grey'}}>
            <span style={{color:'#666363', fontWeight:600}}>Élégance Marocaine Moderne :</span> Le Riad Romana séduit par son mariage subtil entre l'architecture marocaine traditionnelle et des touches contemporaines. Cinq chambres somptueusement décorées vous invitent à un voyage visuel, chaque détail témoignant du savoir-faire artisanal local.<br/><br/>

            <span style={{color:'#666363', fontWeight:600}}>Détente et Luxe :</span> Imprégnez-vous du luxe ultime avec une piscine étincelante, un espace fitness exclusif, et des jardins luxuriants qui évoquent la sérénité. Chaque chambre est une oasis de tranquillité, offrant une échappée paisible après une journée à explorer la ville animée.<br/><br/>

            <span style={{color:'#666363', fontWeight:600}}>Culinaire Exquise :</span> La cuisine entièrement équipée vous invite à explorer les saveurs de Marrakech. Préparez vos propres plats ou optez pour notre service de chef privé, qui transformera vos repas en des expériences gastronomiques inoubliables.<br/><br/>
          </p>
          <div className="small-part-phase-2-2 fade-img" style={{ backgroundImage: `url(${riad2})` }} />
        </div>

        <div className="medu-part-phase-2-2 fade-up">
          <div className="small-part-phase-2-2-2 fade-img" style={{ backgroundImage: `url(${riad3})` }} />
          <p className="small-part-phase-2-2-1 fade-up" style={{fontFamily:'"Josefin Sans", Arial, Helvetica, sans-serif', fontSize:'14px', color:'grey'}}>
            <span style={{color:'#666363', fontWeight:600}}>Service Personnalisé :</span> Notre équipe, polyglotte et dévouée, est prête à anticiper vos moindres besoins. De l'arrivée à l'aéroport jusqu'au départ, nous veillons à ce que chaque moment de votre séjour soit empreint d'attention et de soin.<br/><br/>

            <span style={{color:'#666363', fontWeight:600}}>Emplacement Privilégié :</span> Situé à Marrakech, le Riad Romana vous offre un accès facile aux trésors culturels de la ville. Plongez dans les souks animés, découvrez les palais historiques, ou détendez-vous dans notre retraite paisible après une journée d'aventures.<br/><br/>

            <span style={{color:'#666363', fontWeight:600}}>Réservez dès maintenant votre séjour au Riad Romana et laissez-vous enchanter par l'essence du luxe marocain. Votre oasis personnelle vous attend.</span><br/><br/>
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="big-part-phase-3 fade-up">
        <p className="medu-part-phase-3-1 fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem magnam dignissimos esse quasi animi ex temporibus dicta minima, dolorum commodi sed nam error fugit
        </p>
        <div className="button-first-div fade-up">
          {/* <ResButton/> */}
        </div>
      </div>

    </div>
  );
}

export default MainPage;
