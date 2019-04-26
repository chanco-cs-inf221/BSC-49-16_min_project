import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MAT211 from './mathematicalSciencesCourses/MAT211.jsx'
import MAT121 from './mathematicalSciencesCourses/MAT121.jsx'

class MathemeticalSciences extends Component {
   
    render() {
   
        return (
   
            <div>
            
                <ul className="list-group">

                    {/*rendering components after on click*/}

                    <li className="list-group-item" onClick={dispMAT211}>MAT211</li>
            
                    <li className="list-group-item" onClick={dispMAT121}>MAT121</li>
            
                </ul>
            
                <div id="displayCourse"></div>
            
            </div>
        );
    }
}



const dispMAT211 = () => {
    ReactDOM.render(<MAT211 />, document.getElementById("displayCourse"))
}

const dispMAT121 = () => {
    ReactDOM.render(<MAT121 />, document.getElementById("displayCourse"))
}
export default MathemeticalSciences