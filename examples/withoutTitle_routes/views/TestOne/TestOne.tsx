import { Link, Outlet } from "react-router-dom"
export function TestOne(){
    return(
        <div>
            <h2>i am TestOne component</h2>
            <Link to="/"><button>go to DefualtCom</button></Link>
            <div>
                <p>this is outlet to show route of children</p>
                <Link to="/test1/child1"><button>go to child1</button></Link>
                <Outlet></Outlet>
            </div>
        </div>
    )
}