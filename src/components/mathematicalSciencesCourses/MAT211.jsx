import React from 'react';
import data from '../../program_data'
import './MAT.css'


const MAT211 = () => {

    const name = data[2].name
    const code = data[2].code

    const mat221AssessmentSchedule = {
        week1: data[2].assessment_schedule.week_1,
        week5: data[2].assessment_schedule.week_5,
        week7: data[2].assessment_schedule.week_7,
        week9: data[2].assessment_schedule.week_9,
        week12: data[2].assessment_schedule.week_12,
        week15: data[2].assessment_schedule.week_15
    }
    const credit_hours = data[2].credit_hours
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
        
            </div><div className="displayTable">
        
                <table className="table">
        
                    <tbody>
        
                        <tr>
                            <th>WEEK</th>
        
                            <th>WHAT TO DO</th>
        
                        </tr>
        
                        <tr>
        
                            <td>1</td>
        
                            <td>{mat221AssessmentSchedule.week5}</td>
        
                        </tr>
        
                        <tr>
        
                            <td>7</td>
        
                            <td>{mat221AssessmentSchedule.week7}</td>
        
                        </tr>
        
                        <tr>
        
                            <td>9</td>
        
                            <td>{mat221AssessmentSchedule.week9}</td>
        
                        </tr>
        
                        <tr>
        
                            <td>12</td>
        
                            <td>{mat221AssessmentSchedule.week12}</td>
        
                        </tr>
        
                    </tbody>
        
                </table>

            </div>

        </div>
    );

}
export default MAT211