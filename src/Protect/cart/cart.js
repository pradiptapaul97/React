import React from 'react';
import Drawer from '../../Component/Layout/Drawer'
import {useSelector} from 'react-redux'
import {Container} from 'react-bootstrap'
import Cgrid from './Cgrid'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { Divider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SimpleSlider from '../../Default/slider'
import Followus from '../../Component/Layout/Followus'
import Footer from '../../Component/Layout/Footer'

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    const cart = useSelector(state => state.cartData);
    var ptotal = 0;
    cart.products.map((e)=>{return ptotal = ptotal + (e.price * e.quantity)})
    return(
        <>
        <Drawer/>
        <SimpleSlider name="catagory"/>
        <Container>

        <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <h3 style={{fontWeight: "bold", fontFamily: "fangsong"}}>My Cart</h3>
                    
                    <h5 style={{color: "#f53f85",}}><Link className={classes.link} to="">Home | </Link>Cart</h5>
                </div>
            </main>
            <Divider/>
            </Container>
            <Container className={classes.cardGrid}>

            {cart.products.map((e)=>(
                <Cgrid data={e}/>
            ))}

            <Divider/>

            {(cart.products.length !== 0) ? 
            <>

                <Grid container spacing={3}>
                        
                        <Grid item sm={12} md={6}>
                        
                        </Grid>
                        <Grid item sm={12} md={6}>
                        <Paper className={classes.paper}>
                            <h4>Cart Total</h4>

                            <TableContainer style={{marginBottom: 15}}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Subtotal</TableCell>
                                        <TableCell align="right">{ptotal}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Shipping</TableCell>
                                        <TableCell align="right">$10</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Total</TableCell>
                                        <TableCell align="right">{ptotal+10}</TableCell>
                                    </TableRow>
                                    </TableHead>
                                </Table>
                                </TableContainer>


                        <Link to="/address" style={{display: "flex",
    justifyContent: "center"}}><Button variant="contained" color="primary" >
                            Process To Buy
                        </Button></Link>
                        </Paper>
                        </Grid>
                </Grid>

                
                </>


                : (<>
                <Paper className={classes.paper}>
                    <h2>Your Dipta Cart is empty.</h2>

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
