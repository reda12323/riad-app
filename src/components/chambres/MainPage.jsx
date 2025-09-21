import { Link } from "react-router-dom";
import './MainPage.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate each room image when it enters viewport
            gsap.utils.toArray(".ch-exs-picture-1-1, .ch-exs-picture-1-2, .ch-exs-picture-2-1, .ch-exs-picture-2-2, .ch-exs-picture-3-1, .ch-exs-picture-3-2").forEach(el => {
                gsap.from(el, {
                    scale: 0.95,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // Hover effect
            gsap.utils.toArray(".ch-exs-picture-1-1, .ch-exs-picture-1-2, .ch-exs-picture-2-1, .ch-exs-picture-2-2, .ch-exs-picture-3-1, .ch-exs-picture-3-2").forEach(el => {
                el.addEventListener("mouseenter", () => {
                    gsap.to(el, { scale: 1.05, duration: 0.4, ease: "power2.out" });
                });
                el.addEventListener("mouseleave", () => {
                    gsap.to(el, { scale: 1, duration: 0.4, ease: "power2.out" });
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className='complete-page-main' ref={containerRef}>
            <div className="ch-big-part">
                <div className="ch-medu-child-1">
                    <div className="ch-small-child-1-1">
                        <Link to="/details/almohades" className="ch-link">
                            <div className="ch-exs-picture-1-1">
                                <h5>Chambre Almohades</h5>
                                <button>Détails</button>
                            </div>
                        </Link>
                    </div>
                    <div className="ch-small-child-1-2">
                        <Link to="/details/almoravides" className="ch-link">
                            <div className="ch-exs-picture-1-2">
                                <h5>Chambre Almoravides</h5>
                                <button>Détails</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="ch-medu-child-2">
                    <div className="ch-small-child-2-1">
                        <Link to="/details/saadiens" className="ch-link">
                            <div className="ch-exs-picture-2-1">
                                <h5>Chambre Saadiens</h5>
                                <button>Détails</button>
                            </div>
                        </Link>
                    </div>
                    <div className="ch-small-child-2-2">
                        <Link to="/details/meridines" className="ch-link">
                            <div className="ch-exs-picture-2-2">
                                <h5>Chambre Méridines</h5>
                                <button>Détails</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="ch-medu-child-3">
                    <div className="ch-small-child-3-1">
                        <Link to="/details/alaouites" className="ch-link">
                            <div className="ch-exs-picture-3-1">
                                <h5>Chambre Alaouites</h5>
                                <button>Détails</button>
                            </div>
                        </Link>
                    </div>
                    <div className="ch-small-child-3-2">
                        <Link to="/details/suite-doree" className="ch-link">
                            <div className="ch-exs-picture-3-2">
                                <h5>Suite Dorée</h5>
                                <button>Détails</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
