import React, { Component } from 'react'

export default class Delete extends Component {

    constructor(props) {

        super(props)

        this.state = {

            toBeDeleted: false
        }
    }

    render() {

        return (

            <div id="renderedCourse">

                <h3 id="courseTitle">LIST OF ALL COURSES IN THE APP</h3>

                <ul className="coursesToBeDeleted">{this.renderCourse()}</ul>

            </div>
        )
    }

    renderCourse = () => {

        if (localStorage.course) {

            let coursesObject = JSON.parse(localStorage.course)

            let courses = []

            for (let i = 0; i < coursesObject.length; i++) {

                courses.push(coursesObject[i].code)
            }

            return courses.map(course => {

                return <li key={course} id={course} className="courseCode" >
                    {course}
                    <button className="delete" id={course} onClick={(event) => { this.deleteCourse(event) }}>
                        Delete
                    </button>
                </li>

            })

        }

    }

    deleteCourse = (event) => {

        const selectedCourse = event.target.id;

        let courseObject = JSON.parse(localStorage.course);

        let index

        for (index = 0; index < courseObject.length; index++) {

            if (selectedCourse === courseObject[index].code) {

                //set the deleting course state to true
                this.setState({

                    toBeDeleted: true
                })

                if (this.state.toBeDeleted) {

                    courseObject[index].code = " "
                }

                courseObject.splice(index, 1)
            }
        }


        //updating the local strorage with the new course object

        localStorage.setItem("course", JSON.stringify(courseObject))
    }

}
