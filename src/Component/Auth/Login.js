import React from 'react';
import { Link , useHistory} from "react-router-dom";
import {useFormik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {signIn} from '../../Action/auth.action'
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
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import StarIcon from '@material-ui/icons/Star';
import { toast } from 'react-toastify';
    

const useStyles = makeStyles((theme) => ({
    papers :{
        padding:20,
        width: "40%",
        height: 480,
        borderRadius: 35,
        backgroundColor:"white",
        margin: "30px auto",
        [theme.breakpoints.down('sm')]: {
            width: "90%",
            height: 500,
          },
    },
    buttdown:{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 15,
    },
    htop:{
        color:"white",
        fontWeight: "bolder",
        fontFamily: "cursive",
    },
}))
const Login = () =>
{
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const auth = useSelector(state => state.authData);
    const star = (<StarIcon style={{color: "red",padding: 5}}/>);
    const right = (<CheckCircleIcon style={{color: "green",padding: 3}}/>);
    const wrong = (<CancelIcon style={{color: "red",padding: 3}}/>);

    const formik = useFormik({
        initialValues:{
        email:"",
        password:"",
        error:{email:star,password:star}},
        validate:validation,
        onSubmit:(value)=>
        {
            const fval = {...formik.values}
            if(fval.error.email || !fval.email)
            {
                toast.error("Enter Valid email",{autoClose:2000});
            }
            else if(fval.error.password || !fval.password)
            {
                toast.error("Enter Valid password",{autoClose:2000});
            }
            else
            {
                const email = fval.email;
                const password = fval.password;
                const user = {email,password}
                dispatch(signIn(user));
            }
        }
    })
    

    if(auth.authentiCated === true)
    {
        history.push('/');
    }


    function validation()
    {

        const emailValidity=RegExp(/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i)
        const passwordValidity = RegExp(/^([a-zA-Z0-9]{6,})+$/i)
        const fval = {...formik.values}

        if(fval.email)
        {
            fval.error.email= emailValidity.test(fval.email) ? "" : wrong;
        }
        if(fval.password)
        {
            fval.error.password= passwordValidity.test(fval.password) ? "" : wrong;
        }
        else
        {
            formik.values={...fval}
        }

    }

    return(
        <div >
        <Drawer/>
        <Container>
            <Grid>
                <Paper elevation={10} className={classes.papers}>
                <Grid align='center' style={{backgroundImage:`url("slier/login.jpg")`,height:130, borderRadius:20,paddingTop: 25}}>
                     <Avatar style={{backgroundColor:"#dc004e"}}><LockIcon/></Avatar>
                    <h2 className={classes.htop}>Sign In</h2>
                </Grid>
                <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                <TextField name="email" className={classes.textField} type="email" helperText={formik.values.error.email ? formik.values.error.email : right} label="Email" fullWidth onChange={formik.handleChange} />
                {/* {formik.values.error.email.length > 0 && (<p>{formik.values.error.email}</p>)} */}
                 <TextField name="password" type="password" className={classes.textField} helperText={formik.values.error.password ? formik.values.error.password : right} label="Password" fullWidth onChange={formik.handleChange} />
                 <FormControlLabel
                        control={
                        <Checkbox
                            onChange={formik.handleChange}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Remember Me"
                    />
                  <Button size="large" variant="contained" color="secondary" fullWidth type="submit">Sign In</Button>

                  <Typography className={classes.buttdown}>
                      <span>
                        <Link to="/forgot-pass">
                        Forgot password ?
                        </Link>
                        </span>
                        
                        <span>
                        <Link to="/register" >
                            Don't have an account? Sign Up
                        </Link>
                        </span>
                    </Typography>
                </form>
                </Paper>
            </Grid>
        </Container>
        </div>
    )
}

export default Login