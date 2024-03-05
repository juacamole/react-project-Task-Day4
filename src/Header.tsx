import {useNavigate} from "react-router-dom";

export default function Header(){

    const navigate = useNavigate();

    return <div className={"navbar"}>
        <div className="button" onClick={() => navigate("/")}>Home</div>
        <input onChange={(e) => navigate("/characters/" + e.target.value )}/>
        <div className="button" onClick={() => navigate("/characters")}>Characters</div>
    </div>
}