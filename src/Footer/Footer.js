import React from 'react';
import classes from './Footer.module.css';
import github from '../assets/github.svg';
import sourcecode from '../assets/sourcecode.svg';

const footer = () => (
    <footer className={classes.Footer}>
        <p>Created by Mark Ammari</p>
        <div>
            <a target="_blank" href="https://github.com/Mark-Ammari"><img src={github} alt="github"/></a>
            <a target="_blank"><img src={sourcecode} alt="source-code"/></a>
        </div>
    </footer>
);

export default footer;