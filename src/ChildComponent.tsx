type Properties = {
    id: number;
    name?: string;
}


export default function ChildComponent(p: Properties){
    return <div>
        <span>{p.id} {p.name} </span>
    </div>
}