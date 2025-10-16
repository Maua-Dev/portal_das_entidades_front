import { useParams } from "react-router-dom";
import homeBackGround from "../assets/home-bg.jpg"


export default function Home() {
    const { entityId } = useParams();


    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${homeBackGround})` }}
        >
        {entityId}
        </div>
    );
}