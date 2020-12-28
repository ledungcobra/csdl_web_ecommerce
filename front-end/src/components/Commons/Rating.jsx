import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

export default function HalfRating({valueRate}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Rating name="half-rating" defaultValue={valueRate} precision={0.1} readOnly />
        </div>
    );
}