import {RouterMap} from '../../src/index'
import {BrowserRouter as Router} from 'react-router-dom' 
import * as ReactDOM from 'react-dom'
import {   
    DefualtCom,
    TestOne,
    TestTwo,} from './views/index'
import {routes} from '../../src/typed'

const flatRoutes:routes = [
    {
        path: '/',
        element: <DefualtCom />,
        title:'defualt'
    },
    {
        path: '/test1',
        element: <TestOne />,
        title:'test1'
    },
    {
        path:'/test2',
        element:<TestTwo/>,
        title:'test2',
        children:[

        ]
    },
    {
        path: '*',
        element: <div>there is nothing</div>
    }
]

export default function App(){
    return(
        <div>
            <h1>falt_routes</h1>
            <Router>
                <RouterMap routes={flatRoutes}/>
            </Router>
        </div>
    )
}



