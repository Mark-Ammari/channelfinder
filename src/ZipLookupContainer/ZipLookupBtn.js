import React from 'react';
import classes from './ZipLookupBtn.module.css';

const zipLookupBtn = props => {
    return (
        <div className={classes.ZipLookupBtn}>
            <button {...props} >GO</button>
        </div>
    );
};

export default zipLookupBtn;