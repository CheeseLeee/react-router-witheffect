import { Link } from "react-router-dom"
export function TestTwo(){
    return(
        <div>
            <h2>i am TestTwo component</h2>
            <Link to="/"><button>go to DefualtCom</button></Link>
            <Link to="/test1"><button>go to test1</button></Link>
        </div>
    )
}