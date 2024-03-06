import React, {useState} from "react";
import {Character, response} from "./data.ts";

type ReactFormProps = {
    characters: Character[];
    updateCharacters:  React.Dispatch<React.SetStateAction<Character[]>>
}

export default function ReactForm({updateCharacters, characters}: ReactFormProps){

    const [character, setCharacter] = useState<Character>({
        "id": response.results.length +1,
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
        }}>
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