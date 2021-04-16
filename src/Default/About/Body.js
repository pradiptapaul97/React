import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PublicIcon from '@material-ui/icons/Public';
import Divider from '@material-ui/core/Divider';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        // fontFamily: "cursive !important",
      },
      licon: {
        padding:"0px 5px",
    },
      img:{
          width:"100%",
        //   height:"550px",
        [theme.breakpoints.up("sm")]: {
            height:"550px",
          },
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
    pbold:{
        fontWeight:"bold"
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
                    <img className={classes.img} alt="about" src="https://livani-react.envytheme.com/_next/static/images/about1-a718ab6bf0ecaa2f6fedc3ae7a3edb1d.jpg"/>
                    </Grid>
                <Grid item xs={12} md={6} sx={12}>
                    <p className={classes.pbold} style={{color:"#f53f85", fontSize: "large"}}>About Us</p>
                    <h2 className={classes.h4}>Dipta Trusted Online Shopping Site in the World</h2>
                    <p className={classes.pbold}>Dipta.com offers you flexible and responsive shopping experience.</p>
                    <p><span className={classes.pbold}>Dipta</span> is an eCommerce website which features millions of products, i.e. clothes, shoes, bags, electronic items and much more, with all at incredible prices.</p>
                    <p>One of the most popular on the web is shopping. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <h4 className={classes.h6}><span className={classes.licon}><PublicIcon color="secondary"/></span>Ships to more than 10 countries and regions</h4>
                    <p>We provide customers with a hassle-free and worry-free international shopping experience from buying to delivery.</p>
                </Grid>
            </Grid>
        </Container>

        <Container className={classes.cardGrid}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} sm={6}>
                    <h4 className={classes.h6}>Our Story</h4>
                    <Divider light />
                    <h6 style={{padding:"20px 0px"}}>One of the most popular on the web is shopping.</h6>
                    <p><spn className={classes.licon}><CheckCircleIcon color="secondary"/></spn>People like Livani</p>
                    <p><spn className={classes.licon}><CheckCircleIcon color="secondary"/></spn>World's finest Livani</p>
                    <p><spn className={classes.licon}><CheckCircleIcon color="secondary"/></spn>The original Livani</p>
                    <p><spn className={classes.licon}><CheckCircleIcon color="secondary"/></spn>We trust Livani</p>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <h4 className={classes.h6}>Our Values</h4>
                    <Divider light />
                    <h6 style={{padding:"20px 0px"}}>The best of both worlds. Store and web.</h6>
                    <p><spn className={classes.licon}><CheckCircleIcon color="secondary"/></spn>Always in style!</p>
                    <p><spn className={classes.licon}><CheckCircleIcon color="secondary"/></spn>Discover your favorite shopping</p>
                    <p><spn className={classes.licon}><CheckCircleIcon color="secondary"/></spn>Find yourself</p>
                    <p><spn className={classes.licon}><CheckCircleIcon color="secondary"/></spn>Feel-good shopping</p>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <h4 className={classes.h6}>Our Promise</h4>
                    <Divider light />
                    <h6 style={{padding:"20px 0px"}}>Rediscover a great shopping tradition.</h6>
                    <p><spn className={classes.licon}><CheckCircleIcon color="secondary"/></spn>Get better shopping</p>
                    <p><spn className={classes.licon}><CheckCircleIcon color="secondary"/></spn>Love shopping again</p>
                    <p><spn className={classes.licon}><CheckCircleIcon color="secondary"/></spn>Online shopping.</p>
                    <p><spn className={classes.licon}><CheckCircleIcon color="secondary"/></spn>Shopping for all seasons</p>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}