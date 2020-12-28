import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import {useHistory} from "react-router-dom";
import queryString from 'query-string'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function PaginationControlled({url,pageParam}) {
    const classes = useStyles();
    const history = useHistory()
    const pageBegin = queryString.parse(pageParam).page||1;

    const [page, setPage] = React.useState(pageBegin);
    const handleChange = (event, value) => {
        setPage(value);

        history.push({pathname:url,  search: `?page=${value}`});
        console.log(window.location);
        history.go(0);
    };

    return (
        <div className={classes.root}>
            <Typography className='d-flex justify-content-center'>Page: {page}</Typography>
            <Pagination count={10} page={page} onChange={handleChange} />
        </div>
    );
}