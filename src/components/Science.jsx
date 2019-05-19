import React from 'react';
import ComputerScince from './ComputerScience.jsx'
import MathematicalSciences from './MathematicalSciences.jsx'
import Physics from './Physics'



class Science extends React.Component {

  constructor(props) {

    super(props)

    this.state = {

      //initialise state to "COMPUTER_SCIENCE" to act as the default 

      department: "COMPUTER_SCIENCE"
    }

  }

  handleOnChange = (event) => {

    var element = document.getElementById("departments")

    var selectedDept = element[element.selectedIndex].value

    //use the state to change the selection on the drop down list

    this.setState({

      department: selectedDept

    });

  }

  render() {

    return (

      <div>

        <div className="content">

          <div className="scienceHeader">FALCUTY OF SCIENCE</div>

          <div id="scinceDesc">select a department in<br /> the drop down list below<br />to show courses in the department. <br />Click on the course to show details about it</div>

          <select id="departments" className="form-control" onChange={this.handleOnChange}>

            <option value="COMPUTER_SCIENCE">COMPUTER SCIENCE</option>

            <option value="MATHEMATICAL_SCIENCES">MATHEMATICAL SCIENCES</option>

            <option value="PHYSICS">PHYSICS</option>

          </select>

          {/*conditional rendering*/}
          {(this.state.department !== "PHYSICS" && this.state.department !== "MATHEMATICAL_SCIENCES") && <ComputerScince />}

          {(this.state.department !== "PHYSICS" && this.state.department !== "COMPUTER_SCIENCE") && <MathematicalSciences />}

          {(this.state.department !== "MATHEMATICAL_SCIENCES" && this.state.department !== "COMPUTER_SCIENCE") && <Physics />}

        </div>

      </div>

    );

  }

}

export default Science 