import './MainPage.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PiHairDryer, PiTowel } from "react-icons/pi";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

// import ResButton from '../../reservebutton/ResButton'

const MainPage = (props) => {
    const { roomName } = props;

     const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate images
      gsap.from(".img", {
        opacity: 0,
        scale: 1.1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Animate titles and texts
      gsap.from("h3, p, ul, .rm-tarif", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, [roomName]);

    return (
        <div className="complete-page-main" ref={containerRef}>
            <div className="rm-big-part">
                <div className="rm-medu-child-1">
                    
                    {roomName === "almohades" && (
                        <>
                            <div className="rm-small-child-1-1">
                                <div className='urganece-div'>
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_095337-scaled-pqpitf9nrgs8fbs8o9ctyfu1oj52qbylt5nl2qkrgo.jpg" alt="" />
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_095204-scaled-pqpiqlr39cx9lfvp51h4h5g9ix1fn0rlf7758ura4o.jpg" alt="" />
                                </div>
                                <div className='urganece-div'>
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_095249-scaled-pqpis0idieur0dtywnez7sn5lq396od3m6fd5so0so.jpg" alt="" />
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_095541-scaled-pqpivctpt7fgagz7e3f82ya5n1m8jxmqqpxil7pmo8.jpg" alt="" />
                                </div>
                            </div>
                            <div className="rm-small-child-1-2">
                                <div className='rm-ex-small-child-1-1'>
                                    <h3>Description</h3>
                                    <p>Chambre donnant un accès direct au patio du riad. Elle est<br/> équipée d’une salle de bain privative et d’un petit espace repos<br/> avec fauteuils. Capacité maximum : 2 personnes. Petit-déjeuner<br/> inclus pour chaque réservation.</p>
                                </div>
                                <div className='rm-ex-small-child-1-2'>
                                    <h3>Equipements</h3>
                                    <ul className="features-list f-list-1">
                                        <li><i className="fas fa-tv"></i> TV</li>
                                        <li><i className="fas fa-wifi"></i> Wifi</li>
                                        <li><i className="fas fa-bath"></i> Salle de bain</li>
                                        <li><PiHairDryer id='pI' /> Sèche cheveux</li>
                                    </ul>
                                    <ul className="features-list">
                                        <li><PiTowel id='pI' /> Serviettes</li>
                                        <li><i className="fas fa-soap"></i> Articles de toilettes</li>
                                        <li><i className="fas fa-snowflake"></i> Climatisation Réversible</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rm-small-child-1-3'>
                                <div className='rm-tarif'>Tarif : à partir de 70 Eur par nuit pour 2 personnes</div>
                                {/* <ResButton /> */}
                            </div>
                        </>
                    )}

                    
                    {roomName === "almoravides" && (
                        <>
                            <div className="rm-small-child-1-1">
                                {/* Add unique images */}
                                <div className='urganece-div'>
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_101059-scaled-pqq93f07xxryzbodqo4wv7zk7ugog2hivdwnmxxzbc.jpg" alt="Almoravides" />
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_101252-scaled-pqq95z4ejpa2l3yksrycnkqqfluneen7w1u8o25edk.jpg" alt="Almoravides" />
                                </div>
                                <div className='urganece-div'>
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_101319-scaled-pqq976cza2x9f67rsan6u9txrbxj8hevdzukqsdafc.jpg" alt="Almoravides" />
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_101145-scaled-pqq94rvttbmvr1pdt99igvnj3vrrkbvke3twlbxibs.jpg" alt="Almoravides" />
                                </div>
                            </div>
                            <div className="rm-small-child-1-2">
                                <div className='rm-ex-small-child-1-1'>
                                    <h3>Description</h3>
                                    <p>Chambre donnant un accès direct au patio du riad. Elle est<br/> équipée d’une salle de bain privative et d’un petit espace<br/> avec fauteuils. Capacité maximum : 2 personnes. Petit-<br/>déjeuner inclus pour chaque réservation.</p>
                                </div>
                                <div className='rm-ex-small-child-1-2'>
                                    <h3>Equipements</h3>
                                    <ul className="features-list f-list-1">
                                        <li><i className="fas fa-tv"></i> TV</li>
                                        <li><i className="fas fa-wifi"></i> Wifi</li>
                                        <li><i className="fas fa-bath"></i> Salle de bain</li>
                                        <li><PiHairDryer id='pI' /> Sèche cheveux</li>
                                    </ul>
                                    <ul className="features-list">
                                        <li><PiTowel id='pI' /> Serviettes</li>
                                        <li><i className="fas fa-soap"></i> Articles de toilettes</li>
                                        <li><i className="fas fa-snowflake"></i> Climatisation Réversible</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rm-small-child-1-3'>
                                <div className='rm-tarif'>Tarif : à partir de 75 Eur par nuit pour 2 personnes</div>
                                {/* <ResButton /> */}
                            </div>
                        </>
                    )}

                    
                    {roomName === "saadiens" && (
                        <>
                            <div className="rm-small-child-1-1">
                                {/* Add unique images */}
                                <div className='urganece-div'>
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_102954-scaled-pqqe8pwt95fxrwiip9o6wylw3f4mvz4k0jtmjp6yo8.jpg" alt="Saadiens" />
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_103227-1-scaled-pqqeaqadve70lvldymygqycdu37wco3vyi20i07nd4.jpg" alt="Saadiens" />
                                </div>
                                <div className='urganece-div'>
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_102942-1-scaled-pqqe7gsk53q6amc20q63l9zrkxb0mi5fucibif1uyw.jpg" alt="Saadiens" />
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_103116-scaled-pqqefptk4r0s7ecluak7h71faon06uwmb6nr5utgco.jpg" alt="Saadiens" />
                                </div>
                            </div>
                            <div className="rm-small-child-1-2">
                                <div className='rm-ex-small-child-1-1'>
                                    <h3>Description</h3>
                                    <p>Chambre située au 1er étage du riad. Elle est équipée d’une<br/> salle de bain privative, d’un coin bureau et d’un salon.<br/> Capacité maximum : 3 personnes. Petit-déjeuner inclus pour<br/> chaque réservation.</p>
                                </div>
                                <div className='rm-ex-small-child-1-2'>
                                    <h3>Equipements</h3>
                                    <ul className="features-list f-list-1">
                                        <li><i className="fas fa-tv"></i> TV</li>
                                        <li><i className="fas fa-wifi"></i> Wifi</li>
                                        <li><i className="fas fa-bath"></i> Salle de bain</li>
                                        <li><PiHairDryer id='pI' /> Sèche cheveux</li>
                                    </ul>
                                    <ul className="features-list">
                                        <li><PiTowel id='pI' /> Serviettes</li>
                                        <li><i className="fas fa-soap"></i> Articles de toilettes</li>
                                        <li><i className="fas fa-snowflake"></i> Climatisation Réversible</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rm-small-child-1-3'>
                                <div className='rm-tarif'>Tarif : à partir de 85 Eur par nuit pour 2 personnes</div>
                                {/* <ResButton /> */}
                            </div>
                        </>
                    )}

                    {roomName === "meridines" && (
                        <>
                            <div className="rm-small-child-1-1">
                                {/* Add unique images */}
                                <div className='urganece-div'>
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_102245-scaled-pqpk6n3fm65qcaaka18l0ipxfujyrscmwrdupblnns.jpg" alt="Méridines" />
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_102127-scaled-pqpk47ofyku2cjtjghga2ms270itvxplkqpp2l79qg.jpg" alt="Méridines" />
                                </div>
                                <div className='urganece-div'>
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_102205-scaled-pqpk5dz6i4fyv043lhqhou3sxcqcibdiqk2jo1gjyg.jpg" alt="Méridines" />
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_102318-scaled-pqpk7pmtedmhkaql0zwacqztsna0jdlmq24rdo0iko.jpg" alt="Méridines" />
                                </div>
                            </div>
                            <div className="rm-small-child-1-2">
                                <div className='rm-ex-small-child-1-1'>
                                    <h3>Description</h3>
                                    <p>Chambre située au 1er étage du riad. Elle est équipée d’une<br/> salle de bain privative, d’un coin bureau et d’un salon.<br/> Capacité maximum : 3 personnes. Petit-déjeuner inclus pour<br/> chaque réservation.</p>
                                </div>
                                <div className='rm-ex-small-child-1-2'>
                                    <h3>Equipements</h3>
                                    <ul className="features-list f-list-1">
                                        <li><i className="fas fa-tv"></i> TV</li>
                                        <li><i className="fas fa-wifi"></i> Wifi</li>
                                        <li><i className="fas fa-bath"></i> Salle de bain</li>
                                        <li><PiHairDryer id='pI' /> Sèche cheveux</li>
                                    </ul>
                                    <ul className="features-list">
                                        <li><PiTowel id='pI' /> Serviettes</li>
                                        <li><i className="fas fa-soap"></i> Articles de toilettes</li>
                                        <li><i className="fas fa-snowflake"></i> Climatisation Réversible</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rm-small-child-1-3'>
                                <div className='rm-tarif'>Tarif : à partir de 75 Eur par nuit pour 2 personnes</div>
                                {/* <ResButton /> */}
                            </div>
                        </>
                    )}

                    {roomName === "alaouites" && (
                        <>
                            <div className="rm-small-child-1-1">
                                {/* Add unique images */}
                                <div className='urganece-div'>
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_104442-scaled-pqpkm5fkdre1wnrjpqkz5ltqaq3zrzx71iw9rolszs.jpg" alt="Alaouites" />
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_104549-scaled-pqpkp1rngdcvpdjzshokcdhw8htqiefefvb61eb3t4.jpg" alt="Alaouites" />
                                </div>
                                <div className='urganece-div'>
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_104426-scaled-pqpkl6njcw2fz362ctjs3clobgvev734kqrb0g1de0.jpg" alt="Alaouites" />
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_104504-scaled-pqpkn47lempnu8d12nm67v1s9zckosr9ib18ix68lk.jpg" alt="Alaouites" />
                                </div>
                            </div>
                            <div className="rm-small-child-1-2">
                                <div className='rm-ex-small-child-1-1'>
                                    <h3>Description</h3>
                                    <p>Chambre lumineuse située au 1er étage du riad. Elle est<br/> équipée d’une salle de bain privative et d’un petit coin<br/> bureau. Capacité maximum : 2 personnes. Petit-déjeuner<br/> inclus pour chaque réservation.</p>
                                </div>
                                <div className='rm-ex-small-child-1-2'>
                                    <h3>Equipements</h3>
                                    <ul className="features-list f-list-1">
                                        <li><i className="fas fa-tv"></i> TV</li>
                                        <li><i className="fas fa-wifi"></i> Wifi</li>
                                        <li><i className="fas fa-bath"></i> Salle de bain</li>
                                        <li><PiHairDryer id='pI' /> Sèche cheveux</li>
                                    </ul>
                                    <ul className="features-list">
                                        <li><PiTowel id='pI' /> Serviettes</li>
                                        <li><i className="fas fa-soap"></i> Articles de toilettes</li>
                                        <li><i className="fas fa-snowflake"></i> Climatisation Réversible</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rm-small-child-1-3'>
                                <div className='rm-tarif'>Tarif : à partir de 80 Eur par nuit pour 2 personnes</div>
                                {/* <ResButton /> */}
                            </div>
                        </>
                    )}

                    {roomName === "suite-doree" && (
                        <>
                            <div className="rm-small-child-1-1">
                                {/* Add unique images */}
                                <div className='urganece-div'>
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_110112-2-scaled-pqsg8uv1tmg284pf0cudi6bglxxmgekfyt21011szs.jpg" alt="Suite Dorée" />
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_105746-pqsfxrdn51975utot25xkh4k56mml1iirvso1fi4g8.jpg" alt="Suite Dorée" />
                                </div>
                                <div className='urganece-div'>
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_105852-scaled-pqsfz573795e96tbq5p5qmjzmlt2x00amqdeh3g9ag.jpg" alt="Suite Dorée" />
                                    <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_110011-scaled-pqsfzvikim5fa9r3gh2pofww9e7cwiws2cmzwud8g8.jpg" alt="Suite Dorée" />
                                </div>
                            </div>
                            <div className="rm-small-child-1-2">
                                <div className='rm-ex-small-child-1-1'>
                                    <h3>Description</h3>
                                    <p>Grande chambre lumineuse située au dernier étage du riad.<br/> Elle est équipée d’une salle de bain privative, d’un coin<br/> bureau et d’un salon. Capacité maximum : 3 personnes. Petit-déjeuner<br/> inclus pour chaque réservation.</p>
                                </div>
                                <div className='rm-ex-small-child-1-2'>
                                    <h3>Equipements</h3>
                                    <ul className="features-list f-list-1">
                                        <li><i className="fas fa-tv"></i> TV</li>
                                        <li><i className="fas fa-wifi"></i> Wifi</li>
                                        <li><i className="fas fa-bath"></i> Salle de bain</li>
                                        <li><PiHairDryer id='pI' /> Sèche cheveux</li>
                                    </ul>
                                    <ul className="features-list">
                                        <li><PiTowel id='pI' /> Serviettes</li>
                                        <li><i className="fas fa-soap"></i> Articles de toilettes</li>
                                        <li><i className="fas fa-snowflake"></i> Climatisation Réversible</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rm-small-child-1-3'>
                                <div className='rm-tarif'>Tarif : à partir de 90 Eur par nuit pour 2 personnes</div>
                                {/* <ResButton /> */}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MainPage;
