import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {useHistory} from 'react-router-dom'

import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  gridList: {
    padding:"5px 0px"
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width:"100%",
    border: "1px solid #3f51b5",
  },
  image: {
    width: "100%",
    height: 250,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  square:{
    backgroundColor:"transparent",
    border:"1px solid black",
    color:"black",
    fontSize: "inherit",
    marginLeft:2,
    marginRight:2,
    "&:hover":{
      border:"1px solid #f53f85",
      color:"#f53f85",
    }
  },
  bold:{
    fontWeight: "bold",
  },
  iconstar:{
    color:"#e8c04d"
  },
  link:{
    color:"black",
    textDecoration:"none",
    "&:hover":{
      color:"#f53f85",
      textDecoration:"none",

    }
  },
 
}));
export default function Pgrid(props) {
  const classes = useStyles();
  const history = useHistory();

  const detail = () =>
  {
      const value = props.data[0].id;
    history.push(`products/${value}`);
  }
  return (
    <>
  <div className={classes.root}>
  <Paper className={classes.paper}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="complex" src={props.data[0].image} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} md={4} >


      <Typography gutterBottom variant="subtitle1" className={classes.bold}>
                {props.data[0].category}
                </Typography>

                <Typography style={{padding:"10px 0px"}}>
                <span className={classes.bold}>Details : </span>{props.data[0].title}
                </Typography>

                <Typography variant="subtitle1" className={classes.bold} style={{color:"#f53f85"}}>Unit Price : <span style={{textDecoration: "line-through",color: "#999"}}>${props.data[0].price+100}</span>  ${props.data[0].price}</Typography>
      
                <Typography style={{padding:"10px 0px"}}>
                <span className={classes.bold}>Quantity : </span>{props.data[0].quantity}
                </Typography>

                <Typography variant="body2" gutterBottom>
                Products Type : <span className={classes.bold}>{props.data[0].category}</span>
                </Typography>

                <Typography variant="body2" gutterBottom>
                <span className={classes.bold}>Color:</span> Black
                </Typography>

                <Typography variant="body2" gutterBottom >
                <span className={classes.bold} >Size:</span> XL
                </Typography>

                <Typography variant="body2" gutterBottom style={{padding:"10px 0px",justifyContent: "space-evenly",
    display: "flex"}}>
                <Button variant="contained" color="secondary" onClick={detail} >
                    Product Detail
                </Button>
                </Typography>


      </Grid>

    <Grid item xs={12} md={4} >


<Typography gutterBottom variant="subtitle1" className={classes.bold}>
          {props.data[2].fname} {props.data[2].lname}
          </Typography>

          <Typography style={{padding:"10px 0px"}}>
          <span className={classes.bold}>Address : </span>{props.data[2].address1} {props.data[2].address2}
          </Typography>

          <Typography variant="subtitle1" className={classes.bold} style={{color:"#f53f85"}}>Pin :  {props.data[2].pin}</Typography>

          <Typography style={{padding:"10px 0px"}}>
          <span className={classes.bold}>City : </span>{props.data[2].city}
          </Typography>

          <Typography style={{padding:"10px 0px"}}>
          <span className={classes.bold}>Country : </span>{props.data[2].country}
          </Typography>

          <Typography variant="body2" gutterBottom>
          <span className={classes.bold}>State:</span> {props.data[2].state}
          </Typography>

          <Typography variant="body2" gutterBottom >
          <span className={classes.bold} >Contact:</span> {props.data[2].number}
          </Typography>


</Grid>
</Grid>
    </Paper>
    </div>
    </>
  );
}


