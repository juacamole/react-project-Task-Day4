import {useState} from "react";
import {response} from "./data.ts";
import ChildComponent from "./ChildComponent.tsx";

export default function ParentComponent(){
    const [character, setCharacter] = useState(response.results);

    const filterCharacters = (s: string) => {
        setCharacter(response.results.filter((d) => d.name.startsWith(s) || d.id == s || d.status.startsWith(s)))
    }

    return <div>

        <input onChange={(event) => {
            filterCharacters(event.target.value)
        }}/>

        {character.map((d) => {
            return <ChildComponent id={d.id} name={d.name}/>
        })}

    </div>


}