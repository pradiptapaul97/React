import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import {Link} from 'react-router-dom'
import Drawer from '../../Component/Layout/Drawer'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
//import {useSelector} from 'react-redux'
import Steppers from './Steppers';
import Followus from '../../Component/Layout/Followus'
import Footer from '../../Component/Layout/Footer'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: 32,
  },
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
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


export default function PaymentForm() {

    const classes = useStyles();
    //const orderValue = useSelector(state => state.orders);

  return (
      <>
        <Drawer/>
        <Container>
        <div className={classes.root}>
            <Steppers data={3}/>
        </div>
        <main>
        <div className={classes.heroContent}>
                <h2 style={{fontWeight: "bold", fontFamily: "fangsong"}}>Order</h2>
                
                <h5 style={{color: "#f53f85"}}><Link className={classes.link} to="/">Home | </Link>Order</h5>
            </div>
        </main>
        
            <Divider />
        </Container>
        <Container>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                        Thank you for your order.
                        </Typography>
                        <Typography variant="subtitle1">
                        Your order number is #2001539. We have emailed your order confirmation, and will
                        send you an update when your order has shipped.
                        </Typography>
                    </React.Fragment>
                </Paper>
            </main>
            <Divider />
        </Container>
        <Followus/>
        <Footer/>

        </>
  );
}