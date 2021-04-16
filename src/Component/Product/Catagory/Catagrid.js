import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link,useHistory} from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: "300px",
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
    
  });

const Catagrid = (props) =>{

    // const history = useHistory();
    const classes = useStyles();
    const history = useHistory()
    const id = props.value;

    const gosub = (value) =>
    {
        history.push(`catagory/${id}`)
    }


    const picdata = [{path:"slier/topelec.jpg",color:"white"},{path:"slier/topjua.jpg"},{path:"slier/topman.jpg"},{path:"slier/topwo.jpg"}]

    
    return(
        <>
        <Link className={classes.link} to={{ pathname: `catagory/${id}` }}>
                <Card className={classes.card} style={{backgroundImage: `url("${picdata[props.caid].path}")`}}>
                  <CardContent className={classes.cardContent} style={{color:`${picdata[props.caid].color}`}}>
                  <Typography>
                      50% off
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    {id.toUpperCase()}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" variant="contained" color="secondary" 
                             onClick={()=>gosub}
                             >Shop Now
                    </Button>
                  </CardActions>
                </Card>
                </Link>
        </>    
    )
}

export default Catagrid
