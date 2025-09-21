import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);
    const [sticky, setSticky] = useState(false);

    const toggleMenu = () => setMenuActive(!menuActive);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`nav-bar ${sticky ? 'sticky' : ''}`}>
            <NavLink to="/" className="nav-logo">
                <span className="logo-line">Riad</span>
                <span className="logo-line">ROMANA</span>
            </NavLink>

            <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
                <li><NavLink to="/"  className={({ isActive }) => `link ${isActive ? "active" : ""}`}>ACCUEIL</NavLink></li>
                <li><NavLink to="/riad"  className={({ isActive }) => `link ${isActive ? "active" : ""}`}>LE RIAD</NavLink></li>
                <li><NavLink to="/galerie"  className={({ isActive }) => `link ${isActive ? "active" : ""}`}>GALERIE</NavLink></li>
                <li><NavLink to="/chambres"  className={({ isActive }) => `link ${isActive ? "active" : ""}`}>CHAMBRES</NavLink></li>
                <li><NavLink to="/tarifs"  className={({ isActive }) => `link ${isActive ? "active" : ""}`}>TARIFS</NavLink></li>
                <li><NavLink to="/contact"  className={({ isActive }) => `link ${isActive ? "active" : ""}`}>CONTACT</NavLink></li>
            </ul>

            <div className="menu-icon" onClick={toggleMenu}>
                {menuActive ? '✖' : '☰'}
            </div>
        </nav>
    );
}







// import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css';

// export default function Navbar() {
//     const [menuActive, setMenuActive] = useState(false);
//     const [sticky, setSticky] = useState(false);

//     const toggleMenu = () => setMenuActive(!menuActive);

//     useEffect(() => {
//         const handleScroll = () => {
//             setSticky(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav className={`nav-bar ${sticky ? 'sticky' : ''}`}>
//             <ul className={`nav-left ${menuActive ? 'active' : ''}`}>
//                 <li><NavLink to="/" className="link">ACCUEIL</NavLink></li>
//                 <li><NavLink to="/riad" className="link">LE RIAD</NavLink></li>
//                 <li><NavLink to="/galerie" className="link">GALERIE</NavLink></li>
//             </ul>

//             <NavLink to="/" className="nav-logo">
//                 <span className="logo-line">Riad</span>
//                 <span className="logo-line">ROMANA</span>
//             </NavLink>

//             <ul className={`nav-right ${menuActive ? 'active' : ''}`}>
//                 <li><NavLink to="/chambres" className="link">CHAMBRES</NavLink></li>
//                 <li><NavLink to="/tarifs" className="link">TARIFS</NavLink></li>
//                 <li><NavLink to="/contact" className="link">CONTACT</NavLink></li>
//             </ul>

//             <div className="menu-icon" onClick={toggleMenu}>
//                 {menuActive ? '✖' : '☰'}
//             </div>
//         </nav>
//     );
// }
