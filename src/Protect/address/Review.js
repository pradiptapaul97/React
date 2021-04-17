import React from 'react';
import Drawer from '../../Component/Layout/Drawer'
import { makeStyles } from '@material-ui/core/styles';
import {doneOrder} from '../../Action/order.action'
import {clearCart} from '../../Action/cart.action'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Steppers from './Steppers';
import Followus from '../../Component/Layout/Followus'
import Footer from '../../Component/Layout/Footer'
import {Link} from 'react-router-dom'

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
  


const DeliveryOption = () =>
{
    const addressValue = useSelector(state => state.address);
    const paymentValue = useSelector(state => state.payment);
    const cartValue = useSelector(state => state.cartData);

    const classes = useStyles();
    const history = useHistory()
    const dispatch = useDispatch();


    var totalp = 0.0;


    const avalue = addressValue.deleveryaddressData;
    const cvalue = cartValue.products;
    const pvalue = paymentValue.paymentData;

    const payments = [
        { name: 'Card type', detail: 'Visa' },
        { name: 'Card holder', detail: pvalue.cardname },
        { name: 'Card number', detail: pvalue.cardnumber },
        { name: 'Expiry date', detail: pvalue.date },
      ];

    cvalue.map((e)=>{return totalp = totalp+(e.price)*(e.quantity)})

    const back = () =>
    {
        history.push("/paymet")
    }

    const placeorder = () =>
    {
        // var orders = null;
        // orders = {...cvalue}
        // var uniq = null;
        // uniq = {...pvalue,...avalue}

        // console.log(uniq);
        // console.log(orders);

        dispatch(doneOrder(cvalue,avalue,pvalue))
        dispatch(clearCart())
        history.push("/orderdone")
    }
    return(
        <>
        <Drawer/>
        <Container>
        <div className={classes.root}>
            <Steppers data={2}/>
        </div>
        <main>
        <div className={classes.heroContent}>
                <h2 style={{fontWeight: "bold", fontFamily: "fangsong"}}>Order Sumarry</h2>
                
                <h5 style={{color: "#f53f85"}}><Link className={classes.link} to="">Home | </Link>Order</h5>
            </div>
        </main>
            <Divider />
        </Container>

        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <React.Fragment>
                    <Paper>
                    <Typography variant="h6" style={{padding: 15}} gutterBottom>
                        Order summary
                    </Typography>
                    <List disablePadding>
                        {cvalue.map((product) => (
                        <ListItem className={classes.listItem} key={product.id}>
                            <ListItemText primary={product.category} secondary={product.desc} />
                            <Typography variant="body2">{product.price}</Typography>
                        </ListItem>
                        ))}

                        <Divider />
                        <ListItem className={classes.listItem}>
                            <ListItemText primary="Shipping" />
                            <Typography variant="body2">Free</Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <ListItemText primary="Total" />
                                <Typography variant="subtitle1" className={classes.total}>
                                    {totalp}
                                </Typography>
                        </ListItem>
                    </List>
                    </Paper>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" style={{padding: 15}} gutterBottom className={classes.title}>
                                Shipping
                            </Typography>
                            <Typography gutterBottom>{avalue.fname} {avalue.lname}</Typography>
                            <Typography gutterBottom>{avalue.address1}</Typography>
                            <Typography gutterBottom>{avalue.pin} {avalue.state} {avalue.country}</Typography>
                        </Grid>
                        <Grid item container direction="column" xs={12} sm={6}>
                            <Typography variant="h6" gutterBottom style={{padding: 15}} className={classes.title}>
                                Payment details
                            </Typography>
                            <Grid container>
                                {payments.map((payment) => (
                                <React.Fragment key={payment.name}>
                                    <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                    </Grid>
                                </React.Fragment>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </React.Fragment>

                <div className={classes.buttons}>
                    <Button  className={classes.button} onClick={back}>
                      Back
                    </Button>
                      <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      onClick={placeorder}
                      className={classes.button}
                    >
                      Place order
                    </Button>
                </div>
            </Paper>
        </main>
        <Followus/>
        <Footer/>
        </>
    )
}

export default DeliveryOption