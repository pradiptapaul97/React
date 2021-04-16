import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pcard from './Pcard'
//import {products} from '../products.json'
import {useSelector,useDispatch} from 'react-redux';
import {products} from '../../../Action/product.action'
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
}));

export default function Pgrid() {
  const classes = useStyles();
  const data = useSelector(state => state.product)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(products());
  },[dispatch])

  return (
    <div className={classes.cardGrid}>
      <Grid container spacing={3}>
      {data.loading === true ? (<FullWidthGrid/>) : (
      data.productData.map((value,id) => (
                  <Grid item xs={12} md={4} sm={6} key={id}>
                  <Pcard value={value}/>
                </Grid>
                )))}
      </Grid>
    </div>
  );
}
