import './App.css'
import ParentComponent from "./ParentComponent.tsx";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./WelcomePage.tsx";
import CharacterDetailCard from "./CharacterDetailCard.tsx";
import Header from "./Header.tsx";
import ReactForm from "./ReactForm.tsx";
import {useState} from "react";
import {Character, response} from "./data.ts";
import CharacterCreated from "./CharacterCreated.tsx";


function App() {

    const [characters, setCharacters] = useState<Character[]>(response.results);


  return (
      <>
          <Header></Header>
        <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/characters"  element={<ParentComponent setCharacters={setCharacters} characters={characters}/>}/>
            <Route path="/characters/:id" element={<CharacterDetailCard characters={characters}/>}/>
            <Route path="/characters/new" element={<ReactForm updateCharacters={setCharacters} characters={characters}/>}/>
            <Route path={"/characters/created"} element={<CharacterCreated/>}/>
        </Routes>
      </>
  )
}

export default App
