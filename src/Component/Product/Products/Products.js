import React from 'react';
import {Container} from 'react-bootstrap'
import Drawer from '../../Layout/Drawer'
import Pgrid from './Pgrid'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Followus from '../../../Component/Layout/Followus'
import Footer from '../../../Component/Layout/Footer'
import SimpleSlider from '../../../Default/slider'


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
  }));

const Products = () =>
{
    const classes = useStyles();
    return(
        <>
        <Drawer/>
        <SimpleSlider name="catagory"/>
        <Container>
            <CssBaseline />
                <main>
                    <div className={classes.heroContent}>
                        <h3 style={{fontWeight: "bold", fontFamily: "fangsong"}}>All Products</h3>
                        
                        <h5 style={{color: "#f53f85"}}><Link className={classes.link} to="">Home | </Link>Products</h5>
                    </div>
                    </main>
            <Pgrid/>
        </Container>
        <Followus/>
        <Footer/>
        
        </>
    )

    
}

export default Products