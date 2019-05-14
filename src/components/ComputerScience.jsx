import React from 'react'
import ReactDOM from 'react-dom'
import COM211 from './computerCourses/COM211.jsx';
import COM221 from './computerCourses/COM221.jsx';
import './computerScience.css'


let courses = JSON.parse(localStorage.course);
class ComputerScince extends React.Component {

    render() {

        return (

            <div>

                <ul className="list-group">

                    <li className="list-group-item" onClick={dispCOM211}>COM211</li>

                    <li className="list-group-item" onClick={dispCOM221}>COM221</li>

                </ul>

                <div className="voidDisp" onClick={prepareCourse}>
                    {takeCourse()}
                </div>

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

const takeCourse = () => {
    let comCourses = []
    for (var i = 0; i < courses.length; i++) {
        if ((courses[i].code).includes("COM")) {
            comCourses.push(courses[i].code)
        }
    }

    return comCourses.map(name => {
        return (
            <div key={name}>
                <ul>
                    <li>{name}</li>
                </ul>
            </div>)
    })

}
const prepareCourse = () => {
    const [{assessment_schedule}] = courses
    console.log(assessment_schedule)

}
export default ComputerScince