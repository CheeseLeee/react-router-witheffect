import { Link } from "react-router-dom";
export function ChildrenOne(){
    return (
        <div>
            <h3 style={{color:'red'}} >
                hi i am children ---- 1 
            </h3>
            <div>
                <Link to="/test1/child2"><button>go to children2</button></Link>
            </div>
        </div>
    )
}