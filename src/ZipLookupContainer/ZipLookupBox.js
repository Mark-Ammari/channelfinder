import React from 'react';
import classes from './ZipLookupBox.module.css';

const ZipLookupBox = (props) => {
    return (
        <div className={classes.ZipLookupBox}>
            <input {...props} type="text" name="postal-lookup" />
        </div>
    );
};

export default ZipLookupBox;