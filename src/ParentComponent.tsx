import React, { useState } from "react";
import {Character, response} from "./data.ts";
import ChildComponent from "./ChildComponent.tsx";

type ParentComponentsProps = {
    characters: Character[];
    setCharacters:  React.Dispatch<React.SetStateAction<Character[]>>
}

export default function ParentComponent({setCharacters, characters}: ParentComponentsProps) {
    const [error, setError] = useState<string>();
    const [visibleCharacters, setVisibleCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const charactersPerPage = 5;

    const filterCharacters = (s: string) => {
        const newArr = response.results.filter((d) => d.name.toLowerCase().startsWith(s) || d.id.toString() === s);
        setCharacters(newArr);
        setVisibleCharacters(newArr.slice(0, charactersPerPage));
        setCurrentPage(1);
        if (newArr.length === 0) {
            setError("Nothing found");
        } else {
            setError(undefined);
        }
    };

    const loadMoreCharacters = () => {
        const nextPage = currentPage * charactersPerPage;
        const newVisibleCharacters = characters.slice(nextPage, nextPage + charactersPerPage);
        if (newVisibleCharacters.length === 0) {
            setError("No more characters to load");
            return;
        }
        setVisibleCharacters(newVisibleCharacters);
        setCurrentPage(currentPage + 1);
    }

    return <div>

        <input onChange={(event) => filterCharacters(event.target.value.toLowerCase())} />

        {error && <p>{error}</p>}

        {visibleCharacters.map((d) => {
            return <ChildComponent key={d.id} id={d.id} name={d.name} />
        })}

        <button onClick={loadMoreCharacters}>Load More</button>
    </div>
}
