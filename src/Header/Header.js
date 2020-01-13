import React from 'react';
import classes from './Header.module.css';
import logo from '../assets/fubotv.svg'
const header = () => (
    <header className={classes.Header}>
        <img src={logo} alt="Fubo-TV-Logo" />
    </header>
);

export default header;