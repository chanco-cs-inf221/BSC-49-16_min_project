import React from 'react';
import './PHY.css'
import data from '../../program_data';

const PHY121 = () => {

    const name = data[4].name

    const code = data[4].code

    const phy121AssessmentSchedule = {
        //getting the data from the data array
        week5: data[4].assessment_schedule.week_5,

        week6: data[4].assessment_schedule.week_6,

        week7: data[4].assessment_schedule.week_7,

        week8: data[4].assessment_schedule.week_8,

        week12: data[4].assessment_schedule.week_12,

        week13: data[4].assessment_schedule.week_13
    }

    const credit_hours = data[4].credit_hours

    const books = [
        {
            name: data[4].books[0].name,

            author: data[4].books[0].author,

            edition: data[4].books[0].edition
        },

        {
            name: data[4].books[1].name,

            author: data[4].books[1].author,

            edition: data[4].books[1].edition
        }
    ]


    return (

        <div>

            <div className="details">

                {/*display data*/}

                <h3>CODE : {code}</h3>

                <h3>NAME : {name}</h3>

                <h3>PRE-REQUISITE : {data[4].pre_requisite.name}</h3>

                <h3>CREDIT HOURS : {credit_hours} </h3>

                <h3>RECOMENDED BOOKS</h3>

                <ol>

                    <li><strong>{books[0].name} by {books[0].author}</strong></li>

                    <li><strong>{books[1].name} by {books[1].author}</strong></li>

                </ol>

                <h3>ASSESSMENT SCHEDULE</h3>

                <div className="displayTable">

                    <table className="table">

                        <tbody>

                            <tr>

                                <th>WEEK</th>

                                <th>WHAT TO DO</th>

                            </tr>

                            <tr>

                                <td>5</td>

                                <td>{phy121AssessmentSchedule.week5}</td>

                            </tr>

                            <tr>

                                <td>6</td>

                                <td>{phy121AssessmentSchedule.week6}</td>

                            </tr>

                            <tr>

                                <td>8</td>

                                <td>{phy121AssessmentSchedule.week8}</td>

                            </tr>

                            <tr>
                                <td>12</td>

                                <td>{phy121AssessmentSchedule.week12}</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default PHY121