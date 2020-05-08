import React from 'react';
import { Grid, Avatar, createStyles, makeStyles } from '@material-ui/core';

interface Props {
    userImage?: string
}

export const UserIcon = ({userImage}: Props) => {
    const classes = useStyles();

    return (
        <Grid item className={classes.root}>
            <Avatar src={userImage} />
        </Grid>
    )
};

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: '8px'
        }
    })
);