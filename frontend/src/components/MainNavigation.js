import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const navLinkHandler = ({ isActive }) =>
    isActive ? classes.active : undefined;

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/" className={navLinkHandler} end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className={navLinkHandler}>
                            Events
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
