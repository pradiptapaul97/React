import { Container} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom'
import Drawer from '../../Component/Layout/Drawer'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useFormik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {saveAddress,selectAddress} from '../../Action/address.action'
import { useHistory } from 'react-router';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
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

  
const Address = () =>
{
    const classes = useStyles();
    const dispatch = useDispatch();
    const addressValue = useSelector(state => state.address);
    const history = useHistory()

    const selAdd = (seladd) =>
    {
        dispatch(selectAddress(seladd));
        //history.push("/delivery-option")
        history.push("/paymet")
    }

    const formik = useFormik({
        initialValues:{
            fname:"",
            lname:"",
            address1:"",
            address2:"",
            number:"",
            landmark:"",
            city:"",
            state:"",
            pin:"",
            country:"",
            error:{ fname:"  ",lname:"  ",address1:"  ",address2:"  ",number:"  ",landmark:"  ",city:"  ",state:"  ",pin:"  ",}},
            validate:validation,
            onSubmit:(value)=>
            {
                const fval = {...formik.values}
                    if(fval.error.fname)
                    {
                        alert("Enter Valid First name");
                    }
                    
                else
                {
                    const {fname, lname, address1, address2, number, landmark, city, state, pin, country} = fval;
                    const addrs = {fname, lname, address1, address2, number, landmark, city, state, pin, country}


                    
                    dispatch(saveAddress(addrs));
                    dispatch(selectAddress(addrs));
                    //history.push("/delivery-option")
                    history.push("/paymet")
                }
            }
    })

    function validation()
    {
        const fval = {...formik.values}

        if(fval.fname)
        {
            fval.error.fname= (fval.fname.length)>5 ? "" : "* Atleast 6 character";
        }
        if(fval.lname)
        {
            fval.error.lname= (fval.lname.length)>3 ? "" : "* Atleast 4 character";
        }
        if(fval.number)
        {
            fval.error.number= (fval.number.length)>9 ? "" : "* Atleast 10 digit";
        }
        if(fval.pin)
        {
            fval.error.pin= (fval.pin.length)>5 ? "" : "* Atleast 6 digit";
        }
        else
        {
            formik.values={...fval}
        }

    }
    return(
        <>
        <Drawer/>
        <Container>
        <div className={classes.root}>
            <Steppers data={0}/>
        </div>

        <main>
            <div className={classes.heroContent}>
                <h2 style={{fontWeight: "bold", fontFamily: "fangsong"}}>Select Address</h2>
                
                <h5 style={{color: "#f53f85"}}><Link className={classes.link} to="">Home | </Link>Address</h5>
            </div>
        </main>
            <h6 style={{fontWeight:"bold", paddingBottom:"20px"}}>Is the address you'd like to use displayed below? If so, 
            click the corresponding "Deliver to this address" button. 
            Or you can enter a new delivery address. </h6>
            <Divider />
            
            
                <React.Fragment>
                <Grid container spacing={3}>
                    {addressValue.addressData.map((value,id)=>(
                        <Grid item xs={12} md={4} sm={6} key={id}>
                            
                            <Paper className={classes.paper}>
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

                        <Button size="large"  style={{display: "flex",justifyContent: "center"}} variant="contained" onClick={() => selAdd(value)} color="secondary" fullWidth>SELECT ADDRESS</Button>
                        </Paper>
                        
                        </Grid>
                    ))} 
                    </Grid>

                </React.Fragment>
        </Container>

        <Divider />

        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <React.Fragment>
                    <form onSubmit={formik.handleSubmit} >  
                        <Typography variant="h6" gutterBottom>
                            Add New Shipping address
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                helperText={formik.values.error.fname}
                                onChange={formik.handleChange}
                                required
                                id="fName"
                                name="fname"
                                type="text"
                                label="First name"
                                fullWidth
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                helperText={formik.values.error.lname}
                                onChange={formik.handleChange}
                                required
                                id="lName"
                                name="lname"
                                type="text"
                                label="Last name"
                                fullWidth
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                helperText={formik.values.error.address1}
                                onChange={formik.handleChange}
                                required
                                id="address1"
                                name="address1"
                                type="text"
                                label="Address line 1"
                                fullWidth
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                helperText={formik.values.error.address2}
                                onChange={formik.handleChange}
                                id="address2"
                                name="address2"
                                type="text"
                                label="Address line 2"
                                fullWidth
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                helperText={formik.values.error.number}
                                onChange={formik.handleChange}
                                required
                                id="number"
                                name="number"
                                label="number"
                                type="number"
                                fullWidth
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    helperText={formik.values.error.landmark}
                                    onChange={formik.handleChange} id="landmark" type="text" required name="landmark" label="landmark" fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    helperText={formik.values.error.city}
                                    onChange={formik.handleChange}
                                    required
                                    id="city"
                                    name="city"
                                    type="text"
                                    label="City"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField id="state" name="state" onChange={formik.handleChange} label="State/Province/Region" fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="pin"
                                name="pin"
                                type="number"
                                label="Zip / Postal code"
                                onChange={formik.handleChange}
                                fullWidth
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                onChange={formik.handleChange}
                                type="text"
                                label="Country"
                                fullWidth
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Use this address for payment details"
                            />
                            </Grid>
                        </Grid>
                        <div className={classes.buttons}>
                            <Button variant="contained" color="secondary" type="submit" className={classes.button}>
                        Next
                        </Button>
                        </div>
                    </form>
                </React.Fragment>
            </Paper>
        </main>
        <Followus/>
        <Footer/>
        </>
    )
}

export default Address