import './Accueil.css';
import TopSlider from './topSlider/TopSlider';
import Slider from './slider/Slider';
import MainPage from './MainPage';
import Footer from '../footer/Footer';

const Accueil = () => {
    return (
        <div>
            <div>
                <TopSlider/>
            </div>
            <div>
                <Slider />
            </div>
            <div>
                <MainPage />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
 
export default Accueil;