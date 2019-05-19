import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


class Admin extends Component {

    render() {
        return (
            <div>
                <NavLink to="/Admin/add" className="adminLinkDel">ADD COURSE</NavLink>
                <NavLink to="/Admin/delete" className="adminLinkAdd">DELETE COURSE</NavLink>
            </div>
        )
    }
}

export default Admin