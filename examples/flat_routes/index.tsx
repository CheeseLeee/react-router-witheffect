import {RouterWithEffect} from '../../src/index'
import {useNavigate} from 'react-router-dom' 
import { useEffect } from 'react'
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
    let nav = useNavigate()
    useEffect(() => {
        return () => {nav('/'); console.log('卸载了',)}
    },[])
    return(
        <div>
            <h1>falt_routes</h1>
      
                <RouterWithEffect routes={flatRoutes}/>
      
        </div>
    )
}



