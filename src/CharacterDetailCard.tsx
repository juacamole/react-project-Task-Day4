
import {response} from "./data.ts";
import ChildComponent from "./ChildComponent.tsx";
import {useState} from "react";
import {useParams} from "react-router-dom";


export default function CharacterDetailCard(){

    const [characters, setCharacters] = useState(response.results)
    const params = useParams();
    const id = params.id;

    console.log(id)




    const result = characters.filter((d) => d.id == id)




    return <div>
        {result.map((d) => {
        return <ChildComponent id={d.id} name={d.name}/>})}
    </div>
}