import React from 'react';
import {Container} from 'react-bootstrap'
import Drawer from '../../Layout/Drawer'
import Pgrid from './Pgrid'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from 'react-router-dom'
import Followus from '../../Layout/Followus'
import Footer from '../../Layout/Footer'
import SimpleSlider from '../../../Default/slider'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
        // fontFamily: "cursive !important",
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


const Products = () =>
{
    const classes = useStyles();
    return(
        <>
        <Drawer/>
        <SimpleSlider name="catagory"/>
        <Container>
            <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <h2 style={{fontWeight: "bold", fontFamily: "fangsong"}}>Product Details</h2>
                    
                    <h5 style={{color: "#f53f85"}}><Link className={classes.link} to="">Home | </Link>Detail</h5>
                </div>
                </main>
            </React.Fragment>
        </Container>


        <Container className={classes.cardGrid}>
            <Pgrid/>
        </Container>
        
        <Followus/>
        <Footer/>
        </>
    )

    
}

export default Products