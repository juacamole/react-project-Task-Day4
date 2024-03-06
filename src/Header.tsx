import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Header(){
    const [value, setValue] = useState<string>()
    const navigate = useNavigate();

    return <div className={"navbar"}>
        <div className="button" onClick={() => navigate("/")}>Home</div>
        <form onSubmit={(e) => {
            navigate("/characters/" + value);
            e.preventDefault()}}>
        <input placeholder={"filter by id"} onChange={(e) => setValue(e.target.value)}/>
        </form>
        <div className="button" onClick={() => navigate("/characters/new")}>New</div>
        <div className="button" onClick={() => navigate("/characters")}>Characters</div>
    </div>
}