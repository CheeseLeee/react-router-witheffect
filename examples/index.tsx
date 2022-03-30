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
    const showTestComButtons = [
        'show:WithoutTitlCom',
        'show:FlatCom',
        'show:ChildrensCom'
    ]
    const showTestCom = [
        <WithoutTitlCom/>,
        <FlatCom/>,
        <ChildrensCom/>
    ]
    return(
        <div>
            <h1 style={{color:'red'}}>weclome to TEST APP</h1>
            <p>-------------------show   examples -----------------</p>
            {showTestCom.map((item,index) => {
                return currentShow === index ? <div key={index}>{item}</div> : null
            })}
            <p>-------------------show other examples--------------</p>
            {showTestComButtons.map((item,index) => {
                return <button style={index === currentShow ? {color:'red'} : null} onClick={() => changeCurrentShow(index)} key={index}>{item}</button>
            })}
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById('root'))

