
import {Character} from "./data.ts";
import ChildComponent from "./ChildComponent.tsx";
import {useParams} from "react-router-dom";
import {useState} from "react";
import Comments from "./Comments.tsx";


type CharacterDetailCardProps ={
    characters: Character[];
}

export type RegularComment = {
    "message": string;
    "parent": Character;
}


export default function CharacterDetailCard({characters}: CharacterDetailCardProps){

    const localCharacters = characters
    const params = useParams();
    const id = params.id;

    const [commentMenu, setCommentMenu] = useState<boolean>(false)

    const result = localCharacters.filter((d) => d.id.toString() == id)

    const [comments,  setComments] =  useState<RegularComment[]>([])
    const [allComments]  = useState<RegularComment[]>(comments);

    const filterComments = () => {
        return allComments?.filter((d) => d.parent.id.toString() === id);
    }

    const [value, setValue]  = useState<string>("");
    const findParent = () => {
        const c = characters.find((d) => d.id.toString() === id)
        return c === undefined ? { "id": 0,
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
        } : c;
    }


    return <div>
        <div id="comment-button" onClick={() => setCommentMenu(!commentMenu)}></div>
        {commentMenu && <div className={"comment-menu"}>
            <form onSubmit={(e) => {
                if (allComments === undefined) {
                    return <></>
                } else {
                    setComments([
                        ...allComments,
                        {message:value, parent:findParent()}]);
                    e.preventDefault()
                }
            }}>
            <Comments comment={filterComments()}></Comments>
            <input onChange={(e) => setValue(e.target.value)}/>
            </form>
            </div>}
        {result.map((d) => {
        return <ChildComponent key={d.id} id={d.id} name={d.name} img={d.image}/>})}
    </div>
}

