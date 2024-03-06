import {RegularComment} from "./CharacterDetailCard.tsx";

type CommentProps = {
    comment: RegularComment[] | undefined;
}
export default function Comments({comment}: CommentProps){
    return  <>
        {comment?.map((d) => {
            <p>{d.message}</p>
        })}
        </>
}