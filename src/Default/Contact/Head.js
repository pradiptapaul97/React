import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: "#f8f8f8",
    padding: theme.spacing(6, 0, 3),
    display:"flex",
    justifyContent:"space-between",
    [theme.breakpoints.down("sm")]: {
      display:"block",
      textAlign: "center"
    },
  },
  link:{
        color:"black",
        textDecoration:"none",
        "&:hover":{
            color: "#f53f85",
            textDecoration:"none",
    }
  },
}));


export default function Album() {
  const classes = useStyles();

  return (
    <Container>
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
            <h3 style={{fontWeight: "bold", fontFamily: "fangsong"}}>Contact Us</h3>
              
            <h5 style={{color: "#f53f85"}}><Link className={classes.link} to="">Home | </Link>Contact Us</h5>
        </div>
        </main>
    </React.Fragment>
    </Container>
    
  );
}