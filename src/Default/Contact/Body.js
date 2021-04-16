import { Container, Grid } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MicNoneIcon from '@material-ui/icons/MicNone';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
const useStyles = makeStyles((theme) => ({
    sicon: {
        margin: 5,
        padding:5,
        backgroundColor: "#f8f8f8",
    },
    licon: {
        margin: 5,
        padding:5,
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 0, 1),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        fontFamily: "inherit !important",
      },
      h4:{
          marginBottom:20,
          fontWeight: "bold",
      },
      h6:{
        paddingBottom:5,
        paddingTop:15,
        fontWeight: "bold",
    },
    butt:{
        margin: "10px 0px"
    }
  }));

export default function Body()
{
    const classes = useStyles();
    return(
        <>
        <Container className={classes.cardGrid}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} sx={12}>
                    <h4 className={classes.h4}>Here To Help</h4>
                    <p>Have a question? You may find an answer in our FAQs. But you can also contact us.</p>
                    <p><span className={classes.licon}><LocationOnIcon color="secondary"/></span>Location: Wonder Street, USA, New York</p>
                    <p><span className={classes.licon}><PhoneAndroidIcon color="secondary"/></span>Call Us: +1-541-754-3010</p>
                    <p><span className={classes.licon}><MailOutlineIcon color="secondary"/></span>Email Us: hello@livani.com</p>
                    <p><span className={classes.licon}><MicNoneIcon color="secondary"/></span>Fax: +123456789</p>
                    <h4 className={classes.h4}>Opening Hours:</h4>
                    <p><span className={classes.licon}><QueryBuilderIcon color="secondary"/></span>Monday: 8AM - 6AM</p>
                    <p><span className={classes.licon}><QueryBuilderIcon color="secondary"/></span>Tuesday: 8AM - 6AM</p>
                    <p><span className={classes.licon}><QueryBuilderIcon color="secondary"/></span>Wednesday: 8AM - 6AM</p>
                    <p><span className={classes.licon}><QueryBuilderIcon color="secondary"/></span>Thursday - Friday: 8AM - 6AM</p>
                    <p><span className={classes.licon}><QueryBuilderIcon color="secondary"/></span>Sunday: Closed</p>
                    <h4 className={classes.h4}>Follow Us:</h4>
                    <p>
                        <span className={classes.sicon}><Link><FacebookIcon color="secondary"/></Link></span>
                        <span className={classes.sicon}><Link><TwitterIcon color="secondary"/></Link></span>
                        <span className={classes.sicon}><Link><InstagramIcon color="secondary"/></Link></span>
                        <span className={classes.sicon}><Link><LinkedInIcon  color="secondary"/></Link></span>
                        <span className={classes.sicon}><Link><PinterestIcon color="secondary"/></Link></span>
                        <span className={classes.sicon}><Link><YouTubeIcon color="secondary"/></Link></span>
                    </p>
                    </Grid>
                <Grid item xs={12} md={6} sx={12}>
                    <h4 className={classes.h4}>Drop Us A Line</h4>
                    <p>We're happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have.</p>
                    <h6 className={classes.h6}>NAME <span style={{color:"#ff0c00"}}>*</span></h6>
                    <TextField
                        id="outlined-textarea"
                        placeholder="Name"
                        multiline
                        variant="outlined"
                        fullWidth
                        />
                    <h6 className={classes.h6}>EMAIL <span style={{color:"#ff0c00"}}>*</span></h6>
                    <TextField
                        id="outlined-textarea"
                        placeholder="Your email address"
                        multiline
                        variant="outlined"
                        fullWidth
                        />
                    <h6 className={classes.h6}>PHONE NUMBER <span style={{color:"#ff0c00"}}>*</span></h6>
                    <TextField
                        id="outlined-textarea"
                        placeholder="Your phone umber"
                        multiline
                        variant="outlined"
                        fullWidth
                        />
                    <h6 className={classes.h6}>YOUR MESSAGE <span style={{color:"#ff0c00"}}>*</span></h6>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        defaultValue="Write your message..."
                        variant="outlined"
                        fullWidth
                        />
                    <Button className={classes.butt} variant="contained" color="secondary">
                        Send Message
                    </Button>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}