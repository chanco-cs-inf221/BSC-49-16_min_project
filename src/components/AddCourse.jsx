import React from 'react'
import '../App.css'

let courses = []
const AddCourse = () => {
    return (
        <div className="createCourse">
            <form id="addCourse" >
                <div className="code_name">
                    <span className="labelName"> Name:</span>
                    <input type="text" name="name" placeholder="course name..." className="add" />
                    <span className="labelName"> Code:</span>
                    <input type="text" name="code" placeholder="course code..." className="add" />
                    <span className="labelName"> Credit hours:</span>
                    <input type="number" name="credit_hours" placeholder="credit hours..." className="add" /><br />
                </div>
                <div className="description_and_assessment">
                    <span className="desc_assessment">Desciption:</span><br />
                    <textarea type="text" name="description" className="description" placeholder="description of the course.." required /><br />
                    <div className="desc_assessment">Assessment schedule</div>
                    <div className="assesment_weeks">
                        <span className="labelName">week number : </span>
                        <input type="number" name="input1Week" className="work" placeholder="week #..." />
                        <span className="labelName">work : </span>
                        <input type="text" name="input1Work" placeholder="work to be done..." className="work" /><br />
                        <span className="labelName">week number : </span>
                        <input type="number" name="input2Week" placeholder="week #..." className="work" />
                        <span className="labelName">work : </span>
                        <input type="text" name="input2Work" className="work" placeholder="work to be done..." /><br />
                        <span className="labelName">week number : </span>
                        <input type="number" name="input3Week" placeholder="week #..." className="work" />
                        <span className="labelName">work : </span>
                        <input type="text" name="input3Work" className="work" placeholder="work to be done..." /><br />
                        <span className="labelName">week number : </span>
                        <input type="number" name="input4Week" placeholder="week #..." className="work" />
                        <span className="labelName">work : </span>
                        <input type="text" name="input4Work" className="work" placeholder="work to be done..." /><br />
                        <span className="labelName">week number : </span>
                        <input type="number" name="input5Week" placeholder="week #..." className="work" />
                        <span className="labelName">work : </span>
                        <input type="text" name="input5Work" className="work" placeholder="work to be done..." /><br />
                    </div>
                </div>
            </form>
            <button type="button" className="btn" onClick={add}>ADD COURSE</button>
        </div>
    );


}
const add = () => {
    let form = document.getElementById("addCourse");
    let name = form.name.value;
    let code = form.code.value;

    //get inputs from week details
    let weekInput1 = form.input1Week.value;
    let weekInput2 = form.input2Week.value;
    let weekInput3 = form.input3Week.value;
    let weekInput4 = form.input4Week.value;
    let weekInput5 = form.input5Week.value;

    //get inputs for work details
    let workInput1 = form.input1Work.value
    let workInput2 = form.input2Work.value
    let workInput3 = form.input3Work.value
    let workInput4 = form.input4Work.value
    let workInput5 = form.input5Work.value
    let credit_hours = form.credit_hours.value;
    let description = form.description.value;
    var course = {
        name: name,
        code: code,
        credit_hours: credit_hours,
        assessment_schedule: {
            week1: "week " + weekInput1 + ": " + workInput1,
            week2: "week " + weekInput2 + ": " + workInput2,
            week3: "week " + weekInput3 + ": " + workInput3,
            week4: "week " + weekInput4 + ": " + workInput4,
            week5: "week " + weekInput5 + ": " + workInput5
        },
        books: [
            {
                name: "operating system concepts",
                author: "silberg",
                edition: 9
            },
            {
                name: "modern operating systems",
                autho: "ANDREW S. TANENBAUM",
                edition: 4
            }
        ],
        description: description
    }

    if (name && code && description) {

        if (localStorage.course) {
            courses = JSON.parse(localStorage.course);
            courses.push(course);
        }
        else {
            courses.push(course);
            localStorage.setItem("course", JSON.stringify(courses));
        }
    }
    else {
        alert("NAME, CODE AND DESCRIPTION  ARE MANDATORY")
        return
    }
    localStorage.setItem("course", JSON.stringify(courses));
    console.log(courses)
    form.reset();
}
export default AddCourse