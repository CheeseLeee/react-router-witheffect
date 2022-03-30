import { Link } from "react-router-dom"
export function DefualtCom(){
    return(
        <div>
            <h2>i am DefualtCom component</h2>
            <Link to="/test1"><button>go to test1</button></Link>
            <Link to="/test2"><button>go to test2</button></Link>
        </div>
    )
}