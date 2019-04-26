import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import PHY121 from './physicsCourses/PHY121.jsx'


const Physics = () => {
    
    return (
    
    <Fragment>
    
            <ul className="list-group">
    
                <li className="list-group-item" onClick={dispPHY121}>PHY121</li>
    
            </ul>
    
            <div id="displayCourse"></div>
    
        </Fragment>
    
    );

}

const dispPHY121 = () => {
    ReactDOM.render(<PHY121 />, document.getElementById("displayCourse"))
}

export default Physics