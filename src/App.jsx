import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading/Loading";
import "./App.css";
import Accueil from "./components/accueil/Accueil";
import Riad from "./components/riad/Riad";
import Galerie from "./components/galerie/Galerie";
import Chambres from "./components/chambres/Chambres";
import RoomDetails from './components/chambres/roomdetails/RoomDetails';
import ScrollToTop from "./components/chambres/roomdetails/scrollToTop/ScrollToTop";
import Tarifs from "./components/tarifs/Tarifs";
import Contact from "./components/contact/Contact";
import NotFound from './components/notfound/NotFound';



export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loading onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="app-content">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/riad" element={<Riad />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/chambres" element={<Chambres />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/details/:roomName" element={<RoomDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </>
  );
}
