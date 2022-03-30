import { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import {iPorpsOfRouterMap,routes} from './typed'
export {BrowserRouter as Router} from 'react-router-dom' 


let pathMapTitle:Map<string,string>
pathMapTitle = new Map()
function createRoutesTree(routes:routes){
    routes.forEach((item) => {
        let path = item.path
        let title = item.title      
        let children = item.children
        pathMapTitle.set(path,title)
        if(children){
            createRoutesTree(children)
        }
    })
    return pathMapTitle
}
export function RouterMap(props:iPorpsOfRouterMap) {
    let loaction = useLocation()
    let pathMapTitle = createRoutesTree(props.routes)
    useEffect(() => {
        let currentLocationPathname = loaction.pathname
        let getPathMapTitle = pathMapTitle.get(currentLocationPathname)
        if(getPathMapTitle){
            document.title = getPathMapTitle
        }
    },[loaction]) 
    let router = useRoutes(props.routes)
    return (
        <div>
            {router}
        </div>
    )
} 




