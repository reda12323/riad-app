import { useEffect, useRef } from "react";
import gsap from "gsap";
import './MainPage.css';

const MainPage = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".first-sen", {
                opacity: 0,
                y: -30,
                duration: 1,
                ease: "power3.out",
            });
            gsap.from(".coor-word", {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
            });
            gsap.from(".contact-item", {
                opacity: 0,
                x: -50,
                duration: 0.8,
                stagger: 0.3,
                delay: 0.6,
                ease: "power2.out",
            });
            gsap.from(".ct-form", {
                opacity: 0,
                scale: 0.95,
                duration: 1,
                delay: 1.2,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className='complete-page-main'>
            <div className="ct-big-part">
                <p className='first-sen'>Pour toute demande d’information ou de réservation n’hésitez pas à nous contacter.</p>
                <h1 className='coor-word'>Coordonnées</h1>

                <div className='localisation'>
                    Hay Kennaria, Derb Boutouil N° 79 Médina - Marrakech
                </div>

                <div className='contact-info'>
                    <div className='contact-item item-1'>
                        <span className='contact-item-sp-1'>Adresse e-mail</span>
                        <span className='contact-item-sp-2'>
                            <a href="mailto:contact@riad-romana-marrakech.com">
                                contact@riad-romana-marrakech.com
                            </a>
                        </span>
                    </div>
                    <div className='contact-item item-2'>
                        <span className='contact-item-sp-1'>Numéro de téléphone</span>
                        <span className='contact-item-sp-2'>+212 768 805 405</span>
                    </div>
                    <div className='contact-item item-3'>
                        <span className='contact-item-sp-1'>Horaires de travail</span>
                        <span className='contact-item-sp-2'>7j/7 — 24h</span>
                    </div>
                </div>

                <form className='ct-form'>
                    <div className='first-part-form-ct'>
                        <input type="text" placeholder='Votre Nom' />
                        <input type="email" placeholder='Votre Email' />
                    </div>
                    <div className='first-part-two-ct'>
                        <textarea placeholder='Message'></textarea>
                    </div>
                    <div className='first-part-tree-ct'>
                        <button type="submit">ENVOYER</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MainPage;
