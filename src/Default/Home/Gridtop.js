import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {catagory} from '../../Action/product.action'
import {Link, useHistory} from 'react-router-dom'
import {FullWidthGrid} from './Loading'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: "200px",
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  link:{
    "&:hover":{
      textDecoration:"none",
    }
  }
}));


export default function Album() {
  const classes = useStyles();

  const dispatch = useDispatch();
    const history = useHistory()

    const gosub = (value) =>
    {
        history.push(`catagory/${value}`)
    }

    const picdata = [{path:"slier/topelec.jpg",color:"white"},{path:"slier/topjua.jpg"},{path:"slier/topman.jpg"},{path:"slier/topwo.jpg"}]

    useEffect(()=>{
        dispatch(catagory());
    },[dispatch])


    const catagoryData = useSelector(state => state.product)

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid}>
          {/* End hero unit */}
          <Grid container spacing={4}>
          {catagoryData.loading === true ? (<FullWidthGrid/>) : (
            catagoryData.catagory.map((value,id) => (
              <Grid item key={id} xs={12} sm={6} md={3}>
                <Link className={classes.link} to={{ pathname: `catagory/${value}` }}>
                <Card className={classes.card} style={{backgroundImage: `url("${picdata[id].path}")`}}>
                  <CardContent className={classes.cardContent} style={{color:`${picdata[id].color}`}}>
                  <Typography>
                      50% off
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    {value.toUpperCase()}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" color="secondary" 
                             onClick={()=>gosub}
                             >Shop Now
                    </Button>
                  </CardActions>
                </Card>
                </Link>
              </Grid>
            )))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}