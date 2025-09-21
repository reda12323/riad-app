import Footer from '../footer/Footer';
import ImageHero from '../imageHero/ImageHero';
import MainPage from './MainPage';

const Riad = () => {

  const bgImage = "https://darchadia.com/wp-content/uploads/2022/06/20220618_111815-scaled.jpg";
  const name = "Le Riad";
  const costum = "top"

  return (
    <div>
      <ImageHero backgroundImage={bgImage} name={name} costum={costum} />
      <MainPage />
      <Footer />
    </div>
  );
};

export default Riad;
