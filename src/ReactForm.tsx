import React, {useState} from "react";
import {Character} from "./data.ts";
import {useNavigate} from "react-router-dom";

type ReactFormProps = {
    characters: Character[];
    updateCharacters:  React.Dispatch<React.SetStateAction<Character[]>>
}

export default function ReactForm({updateCharacters, characters}: ReactFormProps){

    const navigate = useNavigate();
    const [character, setCharacter] = useState<Character>({
        "id": characters.length +1,
        "name": "",
        "status": "",
        "species": "",
        "type": "",
        "gender": "",
        "origin": {
            "name": "",
            "url": ""
        },
        "location": {
            "name": "",
            'url': ""
        },
        "image": "",
        "episode": [],
        "url": "",
        "created": ""
    })

    const saveCharactersOnChange = (name: string, value: string) => {
        const newCharacters = {
            ...character,
            [name]: value
        }
        setCharacter(newCharacters);
    }



    return <>
        <form onSubmit={(e) => {updateCharacters([
            ...characters,
            character
        ]);
        e.preventDefault()
            navigate("/characters/created")
        }
        }>
        <input name="name" placeholder={"name"} onChange={(e) => {
            saveCharactersOnChange(e.target.name, e.target.value)
        }}/>

        <input name="status" placeholder={"status"} onChange={(e) => {
            saveCharactersOnChange(e.target.name, e.target.value)}}/>

        <input name="species" placeholder={"species"} onChange={(e) => {
            saveCharactersOnChange(e.target.name, e.target.value)}}/>

        <button type={"submit"}>Submit</button>
        </form>
    </>
}