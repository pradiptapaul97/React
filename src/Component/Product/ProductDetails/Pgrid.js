import React,{useEffect} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useSelector, useDispatch} from 'react-redux'
import Button from '@material-ui/core/Button';
import { addCart } from '../../../Action/cart.action';
import {productdetails} from '../../../Action/product.action'
import {FullWidthGrid} from '../../../Default/Home/Loading'
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useHistory,useParams,Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { green,red,blue,yellow } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Avatar from '@material-ui/core/Avatar';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  gridList: {
    padding:"5px 0px"
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width:"100%",
    border: "2px solid #f53f85",
  },
  image: {
    width: "100%",
    height: 400,
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

export default function Pgrid() {

  const {detail} = useParams();
  const dispatch = useDispatch();

  
  useEffect(()=>{
    dispatch(productdetails(detail));
  },[dispatch,detail])

  const classes = useStyles();
  const history = useHistory();
  const product = useSelector(state => state.product);
  const cart = useSelector(state => state.cartData);
  


  const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const RedRadio = withStyles({
    root: {
      color: red[400],
      '&$checked': {
        color: red[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const YellowRadio = withStyles({
    root: {
      color: yellow[400],
      '&$checked': {
        color: yellow[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const BlueRadio = withStyles({
    root: {
      color: blue[400],
      '&$checked': {
        color: blue[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const cartAdd = () =>
    {
        const cartProduct = product.singleData;
        const datac = {...cartProduct,quantity:1}
        const datap  = cart.products;
        const match = datap.find(e=>e.id===datac.id)
        
        if(sessionStorage.getItem('token') !== null){
          if(match)
            {
                const dat = datap.map(e =>
                    e.id === datac.id ?
                    {...e,quantity:e.quantity+1}
                    :e)
                dispatch(addCart(dat))
            }
            else
            {
                datap.push(datac)
                dispatch(addCart(datap))
            }
        }
        else
        {
          history.push('/login')
        }
        
      }

    // 

  return (
    product.loading === true ? (<FullWidthGrid/>) : (
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={product.singleData.image} />
            </ButtonBase>

            <GridList className={classes.gridList} cols={2.5}>
              {[1,2,3,4,5].map((tile,key) => (
                <GridListTile key={key} style={{width: "17%",height:60}}>
                  <img src={product.singleData.image} alt="title" />
                </GridListTile>
              ))}
            </GridList>

            
          </Grid>
          <Grid item xs={12} md={6} >
            
                <Typography gutterBottom variant="subtitle1" className={classes.bold}>
                {product.singleData.category}
                </Typography>

                <Typography variant="subtitle1" className={classes.bold} style={{color:"#f53f85"}}><span style={{textDecoration: "line-through",color: "#999"}}>${product.singleData.price+100}</span>  ${product.singleData.price}</Typography>
      
                <Typography style={{padding:"10px 0px"}}>
                  {[1,2,3,4,3].map(()=>(<><StarBorderIcon className={classes.iconstar}/></>))}

                  <Link to="" className={classes.link} style={{fontWeight:"bold"}}> 3 Reviews</Link>
                </Typography>

                <Typography variant="body2" gutterBottom>
                Vendor : <span className={classes.bold}>Lereve</span>
                </Typography>

                <Typography variant="body2" gutterBottom>
                Availability : <span className={classes.bold}>In stock (7 items)</span>
                </Typography>

                <Typography variant="body2" gutterBottom>
                Products Type : <span className={classes.bold}>{product.singleData.category}</span>
                </Typography>

                <Typography variant="body2" gutterBottom>
                <span className={classes.bold}>Color:</span>
                
                <div>
                    <RedRadio
                      checked={selectedValue === 'a'}
                      onChange={handleChange}
                      value="a"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'A' }}
                    />
                    <GreenRadio
                      checked={selectedValue === 'b'}
                      onChange={handleChange}
                      value="b"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'B' }}
                    />
                    <YellowRadio
                      checked={selectedValue === 'c'}
                      onChange={handleChange}
                      value="c"
                      color="default"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'C' }}
                    />
                    <BlueRadio
                      checked={selectedValue === 'd'}
                      onChange={handleChange}
                      value="d"
                      color="default"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'D' }}
                      // size="small"
                    />
                  </div>


                </Typography>

                <Typography variant="body2" gutterBottom >
                <span className={classes.bold} >Size:</span>
                <div style={{display:"flex",paddingTop:10}}>
                <Avatar variant="square" className={classes.square}>
                  XS
                </Avatar>
                <Avatar variant="square" className={classes.square}>
                  S
                </Avatar>
                <Avatar variant="square" className={classes.square}>
                  M
                </Avatar>
                <Avatar variant="square" className={classes.square}>
                  XL
                </Avatar>
                <Avatar variant="square" className={classes.square}>
                  XXL
                </Avatar>
                </div>
                </Typography>


                <Typography variant="body1" gutterBottom style={{padding:"10px 0px"}} >
                <Link to="" className={classes.link}><AspectRatioIcon style={{paddingRight:4}}/><span className={classes.bold}>SIZE GUIDE</span></Link>
                <Link to="" className={classes.link}><LocalShippingIcon style={{paddingRight:4, paddingLeft:4}}/><span className={classes.bold}>SHIPPING</span></Link>
                <Link to="" className={classes.link}><MailOutlineIcon style={{paddingRight:4, paddingLeft:4}}/><span className={classes.bold}>ASK ABOUT THIS PRODUCTS</span></Link>
                </Typography>

                <Typography variant="body2" gutterBottom style={{padding:"10px 0px"}}>
                <span className={classes.bold}>Details : </span>{product.singleData.title}
                </Typography>
                
           
              
              <Button variant="contained" color="secondary" onClick={cartAdd}>
                Add To Cart
              </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
    )
  );
}


