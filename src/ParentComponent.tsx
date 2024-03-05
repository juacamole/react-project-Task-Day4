import {useState} from "react";
import {response} from "./data.ts";
import ChildComponent from "./ChildComponent.tsx";

export default function ParentComponent(){
    const [error, setError] = useState<string>();
    const [character, setCharacter] = useState(response.results);

    const filterCharacters = (s: string) => {
        const newArr = response.results.filter((d) => d.name.toLowerCase().startsWith(s) || d.id == s);
        setCharacter(newArr);
        if (newArr.length === 0) {
            setError("Nothing found");
        } else {
            setError(undefined);
        }
    }


    return <div>

        <input onChange={(event) => {
            filterCharacters(event.target.value.toLowerCase())
        }}/>

        {error && <p>{error}</p>}

        {character.map((d) => {
            return <ChildComponent id={d.id} name={d.name}/>
        })}

    </div>

}