import React from 'react';



class Home extends React.Component {

    constructor(props) {

        super(props)

        //initialising course to null so that whenever it changes, the sate sholud be used 
        //to render different components
        this.state = {

            SinglecourseObj: " ",
        }

    }


    //creating a linear search algorithm bbased on course codes array created from program data

    findCourse = (event) => {

        event.preventDefault();

        let fullCourse

        if (localStorage.course) {

            let courseObject = JSON.parse(localStorage.course)

            let searched_course = document.getElementById("search_form").course.value.toUpperCase()

            const courses = courseObject.map(course => {

                return course.code

            })
            //search for course index in the array and eventually using that index to retrive the course
            //and set it to the course state

            const search = courses.indexOf(searched_course)


            if (search !== -1) {

                const course = courses[search]

                for (let i = 0; i < courseObject.length; i++) {

                    if (course === courseObject[i].code) {

                        fullCourse = courseObject[i]

                        this.setState({
                            SinglecourseObj: fullCourse,
                            week1: fullCourse.assessment_schedule.week1,
                            week2: fullCourse.assessment_schedule.week2,
                            week3: fullCourse.assessment_schedule.week3,
                            week4: fullCourse.assessment_schedule.week4,
                            week5: fullCourse.assessment_schedule.week5,
                        })

                    }
                }
            }
            else {

                //if the course is not in the list, alert the user that the course is not among the list

                alert("COURSE NOT FOUND, CHECK THE CODE !!!")
            }

        }
        else {

            alert("There are no courses currently. Add courses in admin section")

        }
    }

    displayCourse = () => {
        let course = this.state.SinglecourseObj;
        let week1 = this.state.week1
        let week2 = this.state.week2
        let week3 = this.state.week3
        let week4 = this.state.week4
        let week5 = this.state.week5

        return (

            <div>
                <h3>CODE : {course.code}</h3>

                <h3>NAME : {course.name}</h3>

                <h3>CREDIT HOURS : {course.credit_hours}</h3>

                <h3>DESCRIPTION : {course.description}</h3>

                <table className="table" >

                    <tbody>

                        <tr>
                            <th> WORK DETAILS</th>
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


            </div>)
    }

    render() {



        return (

            <div className="container">

                <div id="content">

                    <p className = "homeDescription">Welcome to chanco courses<br /> brochure. You can search the course directly to see its details or choose to explore by falcuties or dive in the previleged science department on the navigation bar </p>

                    <form id="search_form">

                        <input type="text" name="course" placeholder="Search course by code..." className="search" />

                        <button onClick={this.findCourse} className ="seachButton" name="search">Search</button>
                    </form>


                </div>

                <div className="renderCourse">
                    <hr />

                    {this.displayCourse()}
                </div>

                {/*create a modal to display the app information*/}


            </div>
        );
    }
}

export default Home;