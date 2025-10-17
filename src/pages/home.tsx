// import { useParams } from "react-router-dom";
import homeBackGround from "../assets/home-bg.jpg"
import ProfileButton from "../components/profile";
import ArrowButton from "../components/arrow"
import { Link } from "react-router-dom";


export default function Home() {
    // const { entityId } = useParams();


    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${homeBackGround})` }}
        >
            <ProfileButton></ProfileButton>
            <Link to='/entidades'>
                <ArrowButton></ArrowButton>
            </Link>
        </div>
    );
}