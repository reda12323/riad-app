
import './Tarifs.css'
import MainPage from "./MainPage";
import Footer from '../footer/Footer';
import ImageHero from '../imageHero/ImageHero';

const Tarifs = () => {

    const bgImage = "https://darchadia.com/wp-content/uploads/2022/06/20220618_111815-scaled.jpg";
    const name = "tarifs";
    const costum = "top";


    return (
        <div style={{ overflowX: "hidden" }}>
            <div>
                <ImageHero backgroundImage={bgImage} name={name} costum={costum} />
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

export default Tarifs;