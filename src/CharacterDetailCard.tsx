
import {response} from "./data.ts";
import ChildComponent from "./ChildComponent.tsx";
import {useParams} from "react-router-dom";


export default function CharacterDetailCard(){

    const characters = response.results
    const params = useParams();
    const id = params.id;





    const result = characters.filter((d) => d.id == id)




    return <div>
        {result.map((d) => {
        return <ChildComponent key={d.id} id={d.id} name={d.name}/>})}
    </div>
}

