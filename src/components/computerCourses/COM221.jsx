import React from 'react';
import data from '../../program_data'
import './COM.css'
const COM221 = () => {
    const name = data[1].name
    const code = data[1].code

    const com221AssessmentSchedule = {
        week2: data[1].assessment_schedule.week_2,
        week5: data[1].assessment_schedule.week_5,
        week6: data[1].assessment_schedule.week_6,
        week9: data[1].assessment_schedule.week_9,
        week12: data[1].assessment_schedule.week_12,
        week15: data[1].assessment_schedule.week_15
    }
    const credit_hours = data[1].credit_hours
    const books = [
        {
            name: data[1].books[0].name,
            author: data[1].books[0].author,
            edition: data[1].books[0].edition
        },

        {
            name: data[1].books[1].name,
            author: data[1].books[1].author,
            edition: data[1].books[1].edition
        }
    ]

    const description = data[1].description


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
            
                <div className = "displayTable">
            
                    <table className="table">
            
                        <tbody>
            
                            <tr>
            
                                <th>WEEK</th>
            
                                <th>WHAT TO DO</th>
            
                            </tr>
            
                            <tr>
            
                                <td>2</td>
            
                                <td>{com221AssessmentSchedule.week2}</td>
            
                            </tr>
            
                            <tr>
            
                                <td>5</td>
            
                                <td>{com221AssessmentSchedule.week5}</td>
            
                            </tr>
            
                            <tr>
            
                                <td>6</td>
            
                                <td>{com221AssessmentSchedule.week6}</td>
            
                            </tr>
            
                            <tr>
            
                                <td>9</td>
            
                                <td>{com221AssessmentSchedule.week9}</td>
            
                            </tr>
            
                        </tbody>
            
                    </table>
            
                </div>
            
            </div>
            
            <p>{description}</p>
        
        </div>
    );

}

export default COM221