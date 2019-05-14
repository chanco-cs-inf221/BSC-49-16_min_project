import React from 'react';
import '../App.css'
import COM211 from './computerCourses/COM211.jsx'
import COM221 from './computerCourses/COM221.jsx'
import MAT211 from './mathematicalSciencesCourses/MAT211.jsx'
import MAT121 from './mathematicalSciencesCourses/MAT121.jsx'
import PHY121 from './physicsCourses/PHY121.jsx'

var data = JSON.parse(localStorage.data)

class Home extends React.Component {

    constructor(props) {

        super(props)

        //initialising course to null so that whenever it changes, the sate sholud be used 
        //to render different components
        this.state = {

            course: null,
        }
        localStorage.setItem("data", JSON.stringify(data))
        console.log(JSON.parse(localStorage.data))
    }


    //creating a linear search algorithm bbased on course codes array created from program data

    findCourse = (event) => {

        event.preventDefault();

        let searched_course = document.getElementById("search_form").course.value.toUpperCase()

        const courses = []

        for (var i = 0; i < data.length; i++) {

            //creating an array of course codes from JSON data  

            courses.push(data[i].code)

        }

        //search for course index in the array and eventually using that index to retrive the course
        //and set it to the course state

        const search = courses.indexOf(searched_course)

        if (search !== -1) {

            this.setState({

                course: courses[search]

            });

        }

        else {

            //if the course is not in the list, alert the user that the course is not among the list

            alert("COURSE NOT FOUND, CHECK THE CODE !!!")
        }


    }


    render() {

        return (

            <div className="container">

                <div id="content">

                    <p>Welcome to chanco courses<br /> brochure. You can search the course directly to see its details or choose to explore by falcuties or dive in the previleged science department on the navigation bar </p>

                    <form id="search_form">

                        <input type="text" name="course" placeholder="Search course by code..." className="search" />

                        <button onClick={this.findCourse} name="search">Search</button>
                    </form>


                </div>

                <div className="renderCourse">
                    <hr />

                    {/*conditional rendering*/}

                    {(this.state.course === "COM211" && this.state.course !== null) && <COM211 />}

                    {(this.state.course === "COM221" && this.state.course !== null) && <COM221 />}

                    {(this.state.course === "MAT211" && this.state.course !== null) && <MAT211 />}

                    {(this.state.course === "MAT121" && this.state.course !== null) && <MAT121 />}

                    {(this.state.course === "PHY121" && this.state.course !== null) && <PHY121 />}

                </div>

                {/*create a modal to display the app information*/}


            </div>
        );
    }
}

export default Home;