import React from 'react';
import Drawer from '../../../Component/Layout/Drawer'
import {useSelector} from 'react-redux'
import {Container} from 'react-bootstrap'
import Ordergrid from './Ordergrid'
import {Link} from 'react-router-dom';
import { Divider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Followus from '../../../Component/Layout/Followus'
import Footer from '../../../Component/Layout/Footer'


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
    cardGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(8),
        // fontFamily: "cursive !important",
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
      },
      table: {
        border:"1px solid black"
      },
  }));

  
  
const Cart = () =>
{
    const classes = useStyles();
    const orders = useSelector(state => state.orders);
    
    return(
        <>
        <Drawer/>
        <Container>

        <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <h3 style={{fontWeight: "bold", fontFamily: "fangsong"}}>My Orders</h3>
                    
                    <h5 style={{color: "#f53f85",}}><Link className={classes.link} to="">Home | </Link>Orders</h5>
                </div>
            </main>
            <Divider/>
            </Container>
            <Container className={classes.cardGrid}>

            {orders.ordersData.map((e)=>(
                <Ordergrid data={e}/>
                            ))}

            <Divider/>
            {(orders.ordersData.length !== 0) ? 
            <></>
            : (<>
                <Paper className={classes.paper}>
                    <h2>Your Dipta Order is empty.</h2>

                    <p>Your shopping cart is waiting. Give it purpose – fill it with clothing, Jualary, electronics and more.
                    Continue shopping on the <Link to="">Dipta</Link> homepage, learn about today's deals.</p>
                </Paper>
                </>)
            }
                
            
        </Container>
        <Followus/>
        <Footer/>
        </>
    )
}

export default Cart
