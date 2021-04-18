import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Copyright() {
  return (
    <Typography variant="body2" style={{color:"white", borderTop:"1px solid #f53f85", paddingTop:"15px"}} align="center">
      {'Copyright © '}
      <Link color="inherit" >
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    li:{
      align:"center",
    },
    div:{
      backgroundColor:"black",
    },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    maxWidth:"1150px",
    paddingBottom: theme.spacing(3),
    textAlign:"left",
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(3),
    },
  },
  link:{
    textDecoration:"none",
    color:"white",
    "&:hover":{
      color:"#f53f85",
    }
  },
  tyhead:{
    color:"white",
    paddingBottom:8,
  }

}));

const footers = [
  {
    title: 'About The Store',
    description: ['One of the most popular on the web is shopping.', 'Wonder Street, USA, New York', '+1-541-754-3010'],
    icon:['',(<LocationOnIcon/>),(<PhoneIcon/>)],
    link:[]
  },
  {
    title: 'Quick Link',
    description: ['About Us', "FAQ's", 'Contact Us', 'Customer Services'],
    icon:[],
    link:['/about','/faq','/contact','/customer-service']
  },
  {
    title: 'Customer Support',
    description: ['My Account', 'Shop Now','Order Tracking','Help & Support'],
    icon:[],
    link:['/account','/products','','/contact']
  },
  {
    title: 'Newsletter',
    description: ['To get the latest news and latest updates from us.', 'Our E-mail Address:', 'dipta@gmail.com'],
    icon:['','',(<MailOutlineIcon/>)],
    link:[]
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      {/* Footer */}
      <Container component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer,key) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h5" className={classes.tyhead} gutterBottom>
                {footer.title}
                <div style={{height: "2px",backgroundColor: "#f53f85",width: "20%",marginTop: "6px",}}></div>
              </Typography>
              <ul className={classes.ul}>
                {footer.description.map((item,id) => (
                  <li key={item} className={classes.li}>
                    {((key!==1) && (key!==2)) ? (
                    <Typography variant="body2" style={{paddingBottom:10, color:"white"}}>
                      {footers[key].icon[id]}  {item}
                      </Typography>) : (
                        <Link className={classes.link} to={footers[key].link[id]} variant="subtitle1" color="textSecondary">
                        <Typography variant="body2" style={{paddingBottom:10}}>
                          {item}
                          </Typography>
                        </Link>
                      )}
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </div>
  );
}