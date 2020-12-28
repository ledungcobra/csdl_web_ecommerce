import React, {useEffect, useState} from 'react';
import Rating from '@material-ui/lab/Rating';

import {makeStyles} from "@material-ui/core";
import {useSelector} from "react-redux";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));


export default function VoteRating(Good) {
    console.log()
    const classes = useStyles();
    const [isVote, setIsVote] = useState(true);
    const {userInfo} = useSelector(state => state.user);
    const [valueRate, setvalueRate] = useState(0);

    const checkUser = (e) => {
        e.preventDefault()
        console.log(userInfo.id)
        if (userInfo.id) {
            if (isVote) {
                setIsVote(false);
            } else {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'

                    }
                }
                axios.post('/api/users/rate', {
                    goodid: Good.Good,
                    userid: userInfo.id,
                    rate: valueRate
                }, config).then(() => {
                }).catch(e => console.log(e));
            }


        } else {

        }
    }


    return (
        <div className={classes.root}>
            <Rating
                name={Good.Good}
                value={valueRate}
                precision={0.5}
                readOnly={isVote}
                hidden={isVote}
                onChange={(event, newValue) => {
                    console.log(newValue);
                    setvalueRate(newValue);
                }}
            />
            <input type="submit" name="submit" value="vote"
                   className="button" onClick={checkUser}/>
        </div>
    );
}