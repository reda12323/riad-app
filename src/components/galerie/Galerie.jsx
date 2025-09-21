import Footer from '../footer/Footer';
import ImageHero from '../imageHero/ImageHero';
import MainPage from './MainPage';
const Galerie = () => {

    const bgImage = "https://darchadia.com/wp-content/uploads/2022/07/20220618_111234-scaled.jpg";
    const name = "Galerie"
     const costum = "center"
    return (
        <div>
            <ImageHero backgroundImage={bgImage} name={name} costum={costum} />
            <MainPage />
            <Footer/>
        </div>
    );
}

export default Galerie;