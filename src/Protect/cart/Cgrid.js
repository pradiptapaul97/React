import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {plusCart, minusCart, delData} from '../../Action/cart.action'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { makeStyles} from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';

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
  const dispatch = useDispatch();

  const increase = () =>
    {
        if(sessionStorage.getItem('token') !== null){
            const id = props.data.id;
            const prce = props.data.price
            const data = {id,prce}
          dispatch(plusCart(data))
        }
        else
        {
          history.push('/login')
        }
        
    }

    const deldat = () =>
    {
      if(sessionStorage.getItem('token') !== null){
        const id = props.data.id;
        const prce = props.data.price
        const data = {id,prce}
      dispatch(delData(data))
      }
      else
      {
        history.push('/login')
      }
    }

    const decrease = () =>
    {
        if(sessionStorage.getItem('token') !== null){
            const id = props.data.id;
            const prce = props.data.price
            const data = {id,prce}
          dispatch(minusCart(data))
        }
        else
        {
          history.push('/login')
        }
        
    }
  return (
    <>
  <div className={classes.root}>
  <Paper className={classes.paper}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="complex" src={props.data.image} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} md={6} >


      <Typography gutterBottom variant="subtitle1" className={classes.bold}>
                {props.data.category}
                </Typography>

                <Typography style={{padding:"10px 0px"}}>
                <span className={classes.bold}>Details : </span>{props.data.title}
                </Typography>

                <Typography variant="subtitle1" className={classes.bold} style={{color:"#f53f85"}}>Unit Price : <span style={{textDecoration: "line-through",color: "#999"}}>${props.data.price+100}</span>  ${props.data.price}</Typography>
      
                <Typography style={{padding:"10px 0px"}}>
                <span className={classes.bold}>Quantity : </span>{props.data.quantity}
                </Typography>

                <Typography variant="body2" gutterBottom>
                Products Type : <span className={classes.bold}>{props.data.category}</span>
                </Typography>

                <Typography variant="body2" gutterBottom>
                <span className={classes.bold}>Color:</span> Black
                </Typography>

                <Typography variant="body2" gutterBottom >
                <span className={classes.bold} >Size:</span> XL
                </Typography>

                <Typography variant="body2" gutterBottom style={{padding:"10px 0px",justifyContent: "space-evenly",
    display: "flex"}}>
                <Button variant="contained" color="secondary"  onClick={increase}>
                    <AddIcon/>
                </Button>
                <Button variant="contained" color="secondary"  onClick={decrease}>
                    <RemoveIcon/>
                </Button>
                <Button variant="contained" color="secondary"  onClick={deldat}>
                <DeleteIcon/>
                </Button>
                </Typography>


      </Grid>
    </Grid>
    </Paper>
    </div>
    </>
  );
}


