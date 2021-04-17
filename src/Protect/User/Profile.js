import React from 'react';
import Drawer from '../../Component/Layout/Drawer'
import Footer from '../../Component/Layout/Footer'
import Followus from '../../Component/Layout/Followus'

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Container, Paper} from '@material-ui/core';
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
  papers :{
    padding:20,
    width: "40%",
    height: 520,
    borderRadius: 35,
    textAlign:"center",
    margin: "30px auto",
    [theme.breakpoints.down('sm')]: {
        width: "90%",
        height: 370,
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
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    // fontFamily: "cursive !important",
  },
  img:{
    width:"100%",
},
}));

export default function Errors()
{
  const classes = useStyles();
  return(
    <>
    <Drawer/>


    <div style={{backgroundColor: "#f8f8f8"}}>
    <Container>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
            <h3 style={{fontWeight: "bold", fontFamily: "fangsong"}}>My Profile</h3>
              
            <h5 style={{color: "#f53f85"}}><Link className={classes.link} to="">Home | </Link>Profile</h5>
        </div>
        </main>
    </Container>
    </div>

    <div style={{backgroundColor:"white"}}>
    <Container className={classes.cardGrid}>
      <Paper elevation={10} className={classes.papers}>
      <img className={classes.img} alt="about" src="slier/profile.jpg"/>
      <h2 style={{paddingTop:20}}>{sessionStorage.getItem("name")}</h2>
      <p>{sessionStorage.getItem("email")}</p>
      <Link to="/" className={classes.link}><Button variant="contained" color="secondary">
          Go To Home
      </Button>
      </Link>
      </Paper>
    </Container>
    </div>


    <Followus/>
    <Footer/>
    </>
  )
}