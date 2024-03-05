import './App.css'
import ParentComponent from "./ParentComponent.tsx";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./WelcomePage.tsx";
import CharacterDetailCard from "./CharacterDetailCard.tsx";
import Header from "./Header.tsx";


function App() {

  return (
      <>
          <Header></Header>
        <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/characters"  element={<ParentComponent/>}/>
            <Route path="/characters/:id" element={<CharacterDetailCard/>}/>
        </Routes>
      </>
  )
}

export default App
