import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <h1> Bradley Troll </h1>
            <nav>
                <NavLink exact to="/about" activeClassName="active"> About Me </NavLink>
                <NavLink to="/portfolio" activeClassName='active'> Portfolio </NavLink>
                <NavLink to="/contact" activeClassName='active'> Contact </NavLink>
                <NavLink to="/resume" activeClassName='active'> Resume </NavLink>
            </nav>
        </header>
    );
};

export default Header;