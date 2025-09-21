
import './Contact.css'
import MainPage from "./MainPage";
import Footer from '../footer/Footer';
import ImageHero from '../imageHero/ImageHero';

const Contact = () => {

    const bgImage = "https://darchadia.com/wp-content/uploads/2022/06/20220618_110841-scaled.jpg";
    const name = "Contact";
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

export default Contact;