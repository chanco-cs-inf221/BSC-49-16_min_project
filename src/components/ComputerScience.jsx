
import React from 'react'

class ComputerScince extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            courseDetails: ' ',
        }
    }


    render() {
        let course = this.state.courseDetails;
        let week1 = this.state.week1;
        let week2 = this.state.week2;
        let week3 = this.state.week3;
        let week4 = this.state.week4;
        let week5 = this.state.week5;

        return (

            <div>

                <h3 className="comCoursesHeader">COURSES</h3>

                <div className="title">

                    <ul className="courseList"> {this.takeCourse()}</ul>

                    <div id="displayCourse">

                        <h3>CODE : {course.code}</h3>

                        <h3>NAME : {course.name}</h3>

                        <h3>CREDIT HOURS : {course.credit_hours} </h3>

                        <h3 className="courseDescription"> DESCRIPTION : {course.description}</h3>

                        <h3>ASSESSMENT SCHEDULE : </h3>

                        <table className="table" >

                            <tbody>

                                <tr>
                                    <th>WORK DETAILS</th>
                                </tr>

                                <tr>
                                    <td>{week1}</td>
                                </tr>

                                <tr>
                                    <td>{week2}</td>
                                </tr>

                                <tr>
                                    <td>{week3}</td>
                                </tr>

                                <tr>
                                    <td>{week4}</td>
                                </tr>

                                <tr>
                                    <td>{week5}</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>);

    }

    //creating an array with computer courses only
    takeCourse = () => {

        if (localStorage.course) {

            let courseObject = JSON.parse(localStorage.course)

            let courses = courseObject

            let comCourses = []

            for (var i = 0; i < courses.length; i++) {

                if ((courses[i].code).includes("COM")) {

                    comCourses.push(courses[i].code)
                }

            }

            return comCourses.map(name => {

                return (

                    <li key={name} id={name} className="courses" onClick={(event) => this.prepareCourse(event)}>{name}</li>
                )
            })

        }

    }

    //retriving single course object and its associated assessment details
    prepareCourse = (event) => {

        let courses = JSON.parse(localStorage.course)

        const courseCode = event.target.id;

        let course;

        for (let i = 0; i < courses.length; i++) {

            if ((courses[i].code) === (courseCode))

                course = courses[i]
        }

        this.setState({

            courseDetails: course,

            week1: course.assessment_schedule.week1,

            week2: course.assessment_schedule.week2,

            week3: course.assessment_schedule.week3,

            week4: course.assessment_schedule.week4,

            week5: course.assessment_schedule.week5,

        })
    }

}



export default ComputerScince