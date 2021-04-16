import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <CircularProgress disableShrink />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}