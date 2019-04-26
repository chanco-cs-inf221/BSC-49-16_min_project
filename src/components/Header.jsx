import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

class Header extends React.Component {

    render() {

        return (

            <div >

                <div className="navbar">

                    {/*creating links in the navigation bar to render different components on the same page*/}

                    <a href="/" className="linksWebName"><img src={"images/school.png"} alt="" />COURSEs BROCHURE</a>

                    <NavLink to="/" className="links" alt="">HOME</NavLink>

                    <NavLink to="/faculty" className="links">EXPLORE BY FACULTY </NavLink>

                    <NavLink to="/Falcuty/Sciences" className="links">EXPLORE SCIENCE COURSES </NavLink>

                </div>

                <div id="course"></div>

            </div>

        );
    }
}

export default Header;