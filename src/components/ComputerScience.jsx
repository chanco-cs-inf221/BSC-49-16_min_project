import React from 'react'
import ReactDOM from 'react-dom'
import COM211 from './computerCourses/COM211.jsx';
import COM221 from './computerCourses/COM221.jsx';
import './computerScience.css'

class ComputerScince extends React.Component {

    render() {

        return (

            <div>

                <ul className="list-group">

                    <li className="list-group-item" onClick={dispCOM211}>COM211</li>

                    <li className="list-group-item" onClick={dispCOM221}>COM221</li>

                </ul>

                <div id="voidDisp"></div>

                <div id="displayCourse"></div>

            </div>

        );

    }
}



const dispCOM221 = () => {

    ReactDOM.render(<COM221 />, document.getElementById("displayCourse"))
}
const dispCOM211 = () => {

    ReactDOM.render(<COM211 />, document.getElementById("displayCourse"))
}
export default ComputerScince