import { useState } from "react";
import { response } from "./data.ts";
import ChildComponent from "./ChildComponent.tsx";
import Header from "./Header.tsx";

export default function ParentComponent() {
    const [error, setError] = useState<string>();
    const [characters, setCharacters] = useState(response.results);
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
        <Header></Header>
        <input onChange={(event) => filterCharacters(event.target.value.toLowerCase())} />

        {error && <p>{error}</p>}

        {visibleCharacters.map((d) => {
            return <ChildComponent key={d.id} id={d.id} name={d.name} />
        })}

        <button onClick={loadMoreCharacters}>Load More</button>
    </div>
}
