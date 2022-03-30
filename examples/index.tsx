import react, { useState } from 'react'
import ReactDOM from 'react-dom'
import WithoutTitlCom from './withoutTitle_routes/index'
import FlatCom from './flat_routes/index'
import ChildrensCom from './childrens_routes/index'
function App(){
    let [currentShow,setCurrentShow] = useState(0)
    function changeCurrentShow(index:number){
        setCurrentShow(index)
    }
    const showTestComs = [
        {
            name:'show:WithoutTitlCom',
            ele:<WithoutTitlCom/>,
        },
        {
            name:'show:FlatCom',
            ele:<FlatCom/>,
        },
        {
            name:'show:ChildrensCom',
            ele:<ChildrensCom/>,
        },
    ]
    return(
        <div>
            <h1 style={{color:'red'}}>weclome to TEST APP</h1>
            <p>-------------------show   examples -----------------</p>
             {showTestComs.map((item,index) => {
                return currentShow === index ? <div key={index}>{item.ele}</div> : null
            })}
            <p>-------------------show other examples--------------</p>
            {showTestComs.map((item,index) => {
                return <button style={index === currentShow ? {color:'red'} : null} onClick={() => changeCurrentShow(index)} key={index}>{item.name}</button>
            })}
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById('root'))

