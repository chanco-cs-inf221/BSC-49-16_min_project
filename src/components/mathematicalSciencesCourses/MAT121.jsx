import React from 'react'
import data from '../../program_data'
import './MAT.css'
const MAT121 = () => {

    const name = data[3].name
    const code = data[3].code
    const description = data[3].description
    const mat121AssessmentSchedule = {
        week3: data[3].assessment_schedule.week_3,
        week4: data[3].assessment_schedule.week_4,
        week7: data[3].assessment_schedule.week_7,
        week9: data[3].assessment_schedule.week_9,
        week12: data[3].assessment_schedule.week_12,
        week15: data[3].assessment_schedule.week_15
    }

    const credit_hours = data[3].credit_hours
    const books = [
        {
            name: data[2].books[0].name,
            author: data[2].books[0].author,
            edition: data[2].books[0].edition
        },

        {
            name: data[2].books[1].name,
            author: data[2].books[1].author,
            edition: data[2].books[1].edition
        }
    ]
    return (
       
       <div className="mainContent">
       
            <div className="details">
       
                <h3>CODE : {code}</h3>
       
                <h3>NAME : {name}</h3>
       
                <h3>CREDIT HOURS : {credit_hours} </h3>
       
                <h3>RECOMENDED BOOKS</h3>
       
                <ol>
       
                    <li><strong>{books[0].name} by {books[0].author}</strong></li>
       
                    <li><strong>{books[1].name} by {books[1].author}</strong></li>
       
                </ol>

                <h3>ASSESSMENT SCHEDULE</h3>
       
            </div>
       
            <div className="displayTable">
       
                <table className="table">
       
                    <tbody>
       
                        <tr>
       
                            <th>WEEK</th>
       
                            <th>WHAT TO DO</th>
       
                        </tr>
       
                        <tr>
       
                            <td>3</td>
       
                            <td>{mat121AssessmentSchedule.week3}</td>
       
                        </tr>
       
                        <tr>
                            <td>4</td>
       
                            <td>{mat121AssessmentSchedule.week4}</td>
       
                        </tr>
       
                        <tr>
       
                            <td>9</td>
       
                            <td>{mat121AssessmentSchedule.week9}</td>
       
                        </tr>
       
                        <tr>
       
                            <td>12</td>
       
                            <td>{mat121AssessmentSchedule.week12}</td>
       
                        </tr>
       
                    </tbody>
       
                </table>

            </div>
       
            <p>{description}</p>

        </div>
    );

}
export default MAT121