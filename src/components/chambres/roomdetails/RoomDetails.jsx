
import MainPage from "./MainPage";
import Footer from '../../footer/Footer';
import { useParams } from "react-router-dom";
import './RoomDetails.css'
import ImageHero from "../../imageHero/ImageHero";

const RoomDetails = () => {

    const { roomName } = useParams();
    const bgImage = "	https://darchadia.com/wp-content/uploads/2022/06/20220618_111815-scaled.jpg";
    const name = `chambres ${roomName}`;
    const costum = "top"

    return (
        <div style={{ overflowX: "hidden" }}>
            <div>
                <ImageHero backgroundImage={bgImage} name={name} costum={costum} />
            </div>
            <div>
                <MainPage roomName={roomName} />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default RoomDetails;