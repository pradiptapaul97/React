import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Drawer from '../../Layout/Drawer'
import {catagory} from '../../../Action/product.action'
import Grid from '@material-ui/core/Grid';
import {Container} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Catagrid from './Catagrid'
import SimpleSlider from '../../../Default/slider'
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from 'react-router-dom'
import Followus from '../../Layout/Followus'
import Footer from '../../Layout/Footer'
import {FullWidthGrid} from '../../../Default/Home/Loading'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    cardGrid: {
        paddingTop: theme.spacing(8),
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

const Catagory = () =>
{
    const dispatch = useDispatch();
    const classes = useStyles();
    const catagoryData = useSelector(state => state.product)

    useEffect(()=>{
        dispatch(catagory());
    },[dispatch])
    return(
        <>
        <Drawer/>
        <SimpleSlider name="catagory"/>

        <Container>
            <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <h2 style={{fontWeight: "bold", fontFamily: "fangsong"}}>Product Catagory</h2>
                    
                    <h5 style={{color: "#f53f85"}}><Link className={classes.link} to="">Home | </Link>Catagory</h5>
                </div>
                </main>
            </React.Fragment>
        </Container>


        <Container className={classes.cardGrid}>
            <Grid container spacing={3}>
            {catagoryData.loading === true ? (<FullWidthGrid/>) : (
                catagoryData.catagory.map((value,id) => (
                        <Grid item xs={12} md={6} sm={6} key={id}>
                        <Catagrid value={value} caid={id}/>
                        </Grid>
                )))}
            </Grid>
        </Container>

        <Followus/>
        <Footer/>
        </>
    )
}

export default Catagory