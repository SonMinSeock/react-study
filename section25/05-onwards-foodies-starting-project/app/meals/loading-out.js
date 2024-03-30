import React from 'react';
import classes from "./loading.module.css";

function LoadingPage() {
    return (
        <p className={classes.loading}>
           Fetching Meals... 
        </p>
    );
};

export default LoadingPage;