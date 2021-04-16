import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Container } from '@material-ui/core';
import {Link} from 'react-router-dom'
import Drawer from '../../Component/Layout/Drawer'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useFormik} from 'formik'
import {useDispatch} from 'react-redux'
import {selectPayment} from '../../Action/payment.action'
import { useHistory } from 'react-router';
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
    const dispatch = useDispatch();
    const history = useHistory()

    const back = () =>
    {
        history.push("/address")
    }

    const formik = useFormik({
        initialValues:{
            cardname:"",
            cardnumber:"",
            date:"",
            cvv:"",
            error:{cardname:"  ",cardnumber:"  ",date:"  ",cvv:"  "}
        },
        validate:validation,
        onSubmit:(value)=>{
            const fval = {...formik.values}
            const {cardname,cardnumber,date,cvv} = fval;
            const addrs = {cardname,cardnumber,date,cvv}


            
            //dispatch(savePayment(addrs));
            dispatch(selectPayment(addrs));
            history.push("/review")
        }
    })

    function validation()
    {
        const fval = {...formik.values}
    }

  return (
      <>
        <Drawer/>
        <Container>
        <div className={classes.root}>
            <Steppers data={1}/>
        </div>
        <main>
        <div className={classes.heroContent}>
                <h2 style={{fontWeight: "bold", fontFamily: "fangsong"}}>Add Payment Details</h2>
                
                <h5 style={{color: "#f53f85"}}><Link className={classes.link} to="">Home | </Link>Payment</h5>
            </div>
        </main>
            <Divider />
        </Container>

        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <form onSubmit={formik.handleSubmit}>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>Payment method</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField onChange={formik.handleChange} name="cardname" required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField onChange={formik.handleChange}
                                required
                                id="cardNumber"
                                label="Card number"
                                name="cardnumber"
                                fullWidth
                                autoComplete="cc-number"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField onChange={formik.handleChange} name="date" required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField onChange={formik.handleChange}
                                required
                                id="cvv"
                                label="CVV"
                                name="cvv"
                                helperText="Last three digits on signature strip"
                                fullWidth
                                autoComplete="cc-csc"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                                label="Remember credit card details for next time"
                            />
                        </Grid>
                    </Grid>
                </React.Fragment>
                <div className={classes.buttons}>
                    
                    <Button onClick={back}  className={classes.button}>Back</Button>
                    
                    <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    className={classes.button}
                    >
                    Next
                    </Button>
                    
                </div>
                </form>
            </Paper>
        </main>
        <Followus/>
        <Footer/>
    </>
  );
}