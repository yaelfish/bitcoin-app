import React from 'react';
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
    return <nav className="main-nav">
        <ul>
            <li><NavLink exact to='/' activeClassName="active-link">Home</NavLink></li>
            <li><NavLink to='/contact' exact activeClassName="active-link">Contacts</NavLink></li>
            <li><NavLink to='/contact/add' activeClassName="active-link">Add Contact</NavLink></li>
        </ul>
    </nav>
}