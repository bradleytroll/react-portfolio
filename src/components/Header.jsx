import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <br></br>
            <h1> Bradley Troll </h1>
            <nav>
                <NavLink exact to="/about" activeClassName="active">About Me</NavLink>
                <span style={{ margin: '0 10px' }}></span>
                <NavLink to="/portfolio" activeClassName='active'>Portfolio</NavLink>
                <span style={{ margin: '0 10px' }}></span>
                <NavLink to="/contact" activeClassName='active'>Contact</NavLink>
                <span style={{ margin: '0 10px' }}></span>
                <NavLink to="/resume" activeClassName='active'>Resume</NavLink>
            </nav>
            <br></br>
        </header>
    );
};

export default Header;