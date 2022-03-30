import { Link } from "react-router-dom"
export function TestOne(){
    return(
        <div>
            <h2>i am TestOne component</h2>
            <Link to="/"><button>go to DefualtCom</button></Link>
            <Link to="/test2"><button>go to test2</button></Link>
        </div>
    )
}