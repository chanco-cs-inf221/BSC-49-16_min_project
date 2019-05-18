import React, { Component } from 'react'

export default class Delete extends Component {
    render() {
        return (
            <div>

                <ul id="renderedCourses">{this.renderCourse()}</ul>

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
                return <li key={course} id={course} >
                    {course}
                    <button className="btn btn-danger" id={course} onClick={(event) => { this.deleteCourse(event) }}>
                        Delete
                    </button>
                </li>
            })
        }
    }

    deleteCourse = (event) => {
        const selectedCourse = event.target.id;
        console.log(selectedCourse)
        let courseObject = JSON.parse(localStorage.course);

        for (let i = 0; i < courseObject.length; i++) {
            if (selectedCourse === courseObject[i].code) {
                courseObject.splice(i, 1)
            }
        }

        localStorage.setItem("course", JSON.stringify(courseObject))
        }

}
