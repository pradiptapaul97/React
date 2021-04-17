import React from 'react';
import Drawer from '../../Component/Layout/Drawer'
import Footer from '../../Component/Layout/Footer'
import Followus from '../../Component/Layout/Followus'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import {useSelector} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Paper} from '@material-ui/core';
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
        height: 500,
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
    height:200,
},
}));

export default function Errors()
{
  const classes = useStyles();
  const addressValue = useSelector(state => state.address);
  const PaymentaddressValue = useSelector(state => state.payment);
  return(
    <>
    <Drawer/>


    <div style={{backgroundColor: "#f8f8f8"}}>
    <Container>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
            <h3 style={{fontWeight: "bold", fontFamily: "fangsong"}}>My Account</h3>
              
            <h5 style={{color: "#f53f85"}}><Link className={classes.link} to="">Home | </Link>Account</h5>
        </div>
        </main>
    </Container>
    </div>

    <div style={{backgroundColor:"white"}}>
    <Container className={classes.cardGrid}>
      <Paper elevation={10} className={classes.papers}>
      <img className={classes.img} alt="about" src="slier/payment.png"/>
      <h2 style={{paddingTop:20}}>Last Payment Details</h2>
      {(PaymentaddressValue.paymentData.cardnumber) ? (<>
      <p><span style={{fontWeight:"bold"}}>Card Name :- </span>{PaymentaddressValue.paymentData.cardname}</p>
      <p><span style={{fontWeight:"bold"}}>Card Number :- </span>{PaymentaddressValue.paymentData.cardnumber}</p>
      <p><span style={{fontWeight:"bold"}}>Card Expeiry :- </span>{PaymentaddressValue.paymentData.date}</p>
      <p><span style={{fontWeight:"bold"}}>Card Cvv :- </span>{PaymentaddressValue.paymentData.cvv}</p>
      </>) : (<>
      <h2 style={{paddingTop:20}}>No Data Found</h2>
      </>)}
      </Paper>
    </Container>
    </div>

    <Container style={{paddingBottom:50}}>
    <Divider />
            
    <h4 style={{paddingTop:10,textAlign:"centter"}}>MY ADDRESS</h4>
            <React.Fragment >
            <Grid container spacing={3} style={{paddingTop:10}}>
                {addressValue.addressData.map((value,id)=>(
                    <Grid item xs={12} md={6} sm={6} key={id}>
                        
                        <Paper elevation={10} style={{padding: 25,borderRadius: 20}}>
                        <h4 style={{fontWeight:"bold"}}>Address {id+1}</h4>

                        <p><span style={{fontWeight:"bold"}}>Name</span> :- {value.fname} {value.lname}</p>
                        <p><span style={{fontWeight:"bold"}}>Number</span> :- {value.number}</p>
                        <p><span style={{fontWeight:"bold"}}>Pin</span> :- {value.pin}</p>
                        <p><span style={{fontWeight:"bold"}}>Flat</span> :- {value.address1}</p>
                        <p><span style={{fontWeight:"bold"}}>Area</span> :- {value.address2}</p>
                        <p><span style={{fontWeight:"bold"}}>Landmark</span> :- {value.landmark}</p>
                        <p><span style={{fontWeight:"bold"}}>City</span> :- {value.city}</p>
                        <p><span style={{fontWeight:"bold"}}>State</span> :- {value.state}</p>
                        <p><span style={{fontWeight:"bold"}}>Countey</span> :- {value.country}</p>

                   </Paper>
                    
                    </Grid>
                ))} 
                </Grid>

            </React.Fragment>
    </Container>


    <Followus/>
    <Footer/>
    </>
  )
}
