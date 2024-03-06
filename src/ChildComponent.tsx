type Properties = {
    id: number;
    name?: string;
    img?: string;
}


export default function ChildComponent(p: Properties){
    return <div>
        <span>{p.id} {p.name} </span>
        <img src={p.img}/>
    </div>
}