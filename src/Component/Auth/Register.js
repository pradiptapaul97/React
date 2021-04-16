import React from 'react'
import { Link, useHistory } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {useFormik} from 'formik'
import Drawer from '../Layout/Drawer'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/Lock';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import {signUp} from '../../Action/auth.action'
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import StarIcon from '@material-ui/icons/Star';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
    papers :{
        padding:20,
        width: "40%",
        height: 600,
        borderRadius: 35,
        backgroundColor:"white",
        margin: "30px auto",
        [theme.breakpoints.down('sm')]: {
            width: "90%",
            margin: "20px auto",
            marginTop:"15px"
          },
    },
    buttdown:{
        display: "flex",
        justifyContent: "center",
        paddingTop: 15,
    },
    htop:{
        color:"white",
        fontWeight: "bolder",
        fontFamily: "cursive",
    },
    grid:{
        backgroundImage:`url("slier/login.jpg")`,
        height:130, borderRadius:20,
        paddingTop: 25,
    },
}))

const Register = () =>
{
    const star = (<StarIcon style={{color: "red",padding: 5}}/>);
    const right = (<CheckCircleIcon style={{color: "green",padding: 3}}/>);
    const wrong = (<CancelIcon style={{color: "red",padding: 3}}/>);
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const auth = useSelector(state => state.authData);
    const formik = useFormik({
        initialValues:{
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        error:{firstname:star,lastname:star,email:star,password:star}},
        validate:validation,
        onSubmit:(value)=>
        {
            const fval = {...formik.values}
            if(fval.error.firstname || !fval.firstname)
            {
                toast.error("Enter Valid First name",{autoClose:2000});
            }
            else if(fval.error.lastname || !fval.lastname)
            {
                toast.error("Enter Valid Last name",{autoClose:2000});
            }
            else if(fval.error.email || !fval.email)
            {
                toast.error("Enter Valid email",{autoClose:2000});
            }
            else if(fval.error.password || !fval.password)
            {
                toast.error("Enter Valid Password",{autoClose:2000});
            }
            else
            {
                const firstname = fval.firstname;
                const lastname = fval.lastname;
                const email = fval.email;
                const password = fval.password;
                const user = {firstname,lastname,email,password}
                dispatch(signUp(user));
            }
        }
    })

    if(auth.rsuccess === true)
    {
        history.push('/login');
    }

    function validation()
    {
        const isValid = {...formik.values};
        const firstnameValidity = RegExp(/^([a-zA-Z]{4,})+$/i)
        const lastnameValidity = RegExp(/^([a-zA-Z]{2,})+$/i)

        const emailValidity = RegExp(/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i)

        const passwordValidity = RegExp(/^([a-zA-Z0-9]{6,})+$/i)

        if(isValid.firstname)
        {
            isValid.error.firstname= firstnameValidity.test(isValid.firstname) ? "" : wrong;
        }
        if(isValid.lastname)
        {
            isValid.error.lastname= lastnameValidity.test(isValid.lastname) ? "" : wrong;
        }
        if(isValid.email)
        {
            isValid.error.email= emailValidity.test(isValid.email) ? "" : wrong;
        }
        if(isValid.password)
        {
            isValid.error.password= passwordValidity.test(isValid.password) ? "" : wrong;
        }
        else
        {
            formik.values={...isValid}
        }

    }


    return(
        <>
        <Drawer/>
        <Container>
            <Grid>
                <Paper elevation={10} className={classes.papers}>
                <Grid align='center' className={classes.grid}>
                     <Avatar style={{backgroundColor:"#dc004e"}}><LockIcon/></Avatar>
                    <h2 className={classes.htop}>Sign Up</h2>
                </Grid>
                <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                <TextField name="firstname" type="text" helperText={formik.values.error.firstname ? formik.values.error.firstname : right} label="First Name" fullWidth onChange={formik.handleChange} />
                <TextField name="lastname" type="text" helperText={formik.values.error.lastname ? formik.values.error.lastname : right} label="Last Name" fullWidth onChange={formik.handleChange} />
                <TextField name="email" type="email" helperText={formik.values.error.email ? formik.values.error.email : right} label="Email" fullWidth onChange={formik.handleChange} />
                 <TextField name="password" type="password" helperText={formik.values.error.password ? formik.values.error.password : right} label="Password" fullWidth onChange={formik.handleChange} />
                 <FormControlLabel
                        control={
                        <Checkbox
                            onChange={formik.handleChange}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Accept Terms And Condition"
                    />
                  <Button size="large" variant="contained" color="secondary" fullWidth type="submit">Sign Up</Button>


                  <Typography className={classes.buttdown}>  
                        <span>
                        <Link to="/login" >
                        Already have an account? Sign in
                        </Link>
                        </span>
                    </Typography>


                </form>
                </Paper>
            </Grid>
        </Container>
        
        </>
    )
}

export default Register