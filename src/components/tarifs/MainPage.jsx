import './MainPage.css';
import { useEffect, useRef } from "react";
import gsap from "gsap";


const MainPage = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        const elements = containerRef.current.querySelectorAll(".room-details");

        gsap.fromTo(
            elements,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.4, // <-- makes them animate one after the other
            }
        );
    }, []);

    return (
        <div ref={containerRef} className='complete-page-main'>
            {/* Chambre Almohades */}
            <div className="room-details">
                <h3>Chambre Almohades</h3>
                <div className="date-price">
                    <span className="date">Du 09/01 au 30/06</span>
                    <span className="price">80,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 01/07 au 31/07</span>
                    <span className="price">70,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 01/08 au 20/09</span>
                    <span className="price">80,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 21/09 au 20/12</span>
                    <span className="price">85,00 €</span>
                </div>
                <div className="date-price last-date-price">
                    <span className="date">Du 21/12 au 08/01</span>
                    <span className="price">110,00 €</span>
                </div>
            </div>

            {/* Chambre Almoravides */}
            <div className="room-details">
                <h3>Chambre Almoravides</h3>
                <div className="date-price">
                    <span className="date">Du 09/01 au 30/06</span>
                    <span className="price">80,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 01/07 au 31/07</span>
                    <span className="price">75,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 01/08 au 20/09</span>
                    <span className="price">80,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 21/09 au 20/12</span>
                    <span className="price">85,00 €</span>
                </div>
                <div className="date-price last-date-price">
                    <span className="date">Du 21/12 au 08/01</span>
                    <span className="price">110,00 €</span>
                </div>
            </div>

            {/* Chambre Mérinides */}
            <div className="room-details">
                <h3>Chambre Mérinides</h3>
                <div className="date-price">
                    <span className="date">Du 09/01 au 30/06</span>
                    <span className="price">110,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 01/07 au 31/07</span>
                    <span className="price">75,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 01/08 au 20/09</span>
                    <span className="price">90,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 21/09 au 20/12</span>
                    <span className="price">110,00 €</span>
                </div>
                <div className="date-price last-date-price">
                    <span className="date">Du 21/12 au 08/01</span>
                    <span className="price">140,00 €</span>
                </div>
            </div>

            {/* Chambre Alaouites */}
            <div className="room-details">
                <h3>Chambre Alaouites</h3>
                <div className="date-price">
                    <span className="date">Du 09/01 au 30/06</span>
                    <span className="price">90,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 01/07 au 31/07</span>
                    <span className="price">80,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 01/08 au 20/09</span>
                    <span className="price">85,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 21/09 au 20/12</span>
                    <span className="price">90,00 €</span>
                </div>
                <div className="date-price last-date-price">
                    <span className="date">Du 21/12 au 08/01</span>
                    <span className="price">130,00 €</span>
                </div>
            </div>

            {/* Chambre Saadiens */}
            <div className="room-details">
                <h3>Chambre Saadiens</h3>
                <div className="date-price">
                    <span className="date">Du 09/01 au 30/06</span>
                    <span className="price">110,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 01/07 au 31/07</span>
                    <span className="price">85,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 01/08 au 20/09</span>
                    <span className="price">95,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 21/09 au 20/12</span>
                    <span className="price">110,00 €</span>
                </div>
                <div className="date-price last-date-price">
                    <span className="date">Du 21/12 au 08/01</span>
                    <span className="price">160,00 €</span>
                </div>
            </div>

            {/* Suite Dorée */}
            <div className="room-details">
                <h3>Suite Dorée</h3>
                <div className="date-price">
                    <span className="date">Du 09/01 au 30/06</span>
                    <span className="price">100,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 01/07 au 31/07</span>
                    <span className="price">90,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 01/08 au 20/09</span>
                    <span className="price">95,00 €</span>
                </div>
                <div className="date-price">
                    <span className="date">Du 21/09 au 20/12</span>
                    <span className="price">120,00 €</span>
                </div>
                <div className="date-price last-date-price">
                    <span className="date">Du 21/12 au 08/01</span>
                    <span className="price">170,00 €</span>
                </div>
            </div>
        </div>
    );
}
 
export default MainPage;
