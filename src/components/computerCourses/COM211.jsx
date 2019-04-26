import React from 'react';
import data from '../../program_data';
import './COM.css'
const COM211 = () => {

    const name = data[0].name
    const code = data[0].code
    const com221AssessmentSchedule = {
        week4: data[0].assessment_schedule.week_4,
        week5: data[0].assessment_schedule.week_5,
        week8: data[0].assessment_schedule.week_8,
        week9: data[0].assessment_schedule.week_9,
        week12: data[0].assessment_schedule.week_12,
        week15: data[0].assessment_schedule.week_15
    }
    const credit_hours = data[0].credit_hours
    const books = [
        {
            name: data[0].books[0].name,
            author: data[0].books[0].author,
            edition: data[0].books[0].edition
        },

        {
            name: data[0].books[1].name,
            author: data[0].books[1].author,
            edition: data[0].books[1].edition
        }
    ]
    return (
        
        <div>
        
            <div className="details">
        
                <div className="whiteText">
        
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
        
                                <td>4</td>
        
                                <td>{com221AssessmentSchedule.week4}</td>
        
                            </tr>
        
                            <tr>
        
                                <td>5</td>
        
                                <td>{com221AssessmentSchedule.week5}</td>
        
                            </tr>
        
                            <tr>
        
                                <td>8</td>
        
                                <td>{com221AssessmentSchedule.week8}</td>
        
                            </tr>
        
                            <tr>
        
                                <td>9</td>
        
                                <td>{com221AssessmentSchedule.week9}</td>
        
                            </tr>
        
                        </tbody>
        
                    </table>
        
                </div>
        
            </div>
        
        </div>
    );

}
export default COM211