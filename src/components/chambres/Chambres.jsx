import ImageHero from '../imageHero/ImageHero';
import MainPage from './MainPage';
import './Chambres.css'
import Footer from '../footer/Footer';

const Chambres = () => {

    const bgImage = "https://darchadia.com/wp-content/uploads/2022/06/20220618_111815-scaled.jpg";
  const name = "Chambres";
   const costum = "top"

    return (
        <div>
      <ImageHero backgroundImage={bgImage} name={name} costum={costum} /><br /><br /><br /><br /><br />
      <MainPage />
      <Footer />
    </div>
    );
}
 
export default Chambres;