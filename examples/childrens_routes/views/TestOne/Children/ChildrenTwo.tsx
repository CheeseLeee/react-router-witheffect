import { Link } from "react-router-dom";

export function ChildrenTwo(){
    return (
        <div>
            <h3 style={{color:'green'}} >
                hi i am children ---- 2
            </h3>
            <div>
                <Link to="/test1/child1"><button>go to children1</button></Link>
                <ChildrenTwoChild/>
            </div>
        </div>
    )
}

function ChildrenTwoChild(){
    return (
        <div>
            <h3 style={{color:'blue'}} >
                hi i am children ---- 2 ---- child
            </h3>
            <Link to="/"><button>go to defualt</button></Link>
        </div>
    )
}