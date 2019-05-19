import React from 'react'
import { NavLink } from 'react-router-dom';


class Header extends React.Component {

    render() {

        return (

            <div >

                <div className="navbar">

                    {/*creating links in the navigation bar to render different components on the same page*/}

                    <a href="/" className="linksWebName"><img src={"images/school.png"} alt="" />COURSEs BROCHURE</a>

                    <NavLink to="/Admin" className="links" title="add or delete  courses" >ADMIN</NavLink>

                    <NavLink to="/" className="links" title="Home Page">HOME</NavLink>

                    <NavLink to="/faculty" className="links" title="Falcuties">EXPLORE BY FACULTY </NavLink>

                    <NavLink to="/Falcuty/Sciences" className="links" title="science courses">EXPLORE SCIENCE COURSES </NavLink>

                </div>

                <div id="course"></div>

            </div>

        );
    }
}

export default Header;