import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link,useHistory} from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import CardMedia from '@material-ui/core/CardMedia';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import {useSelector,useDispatch} from 'react-redux';
import { addCart } from '../../../Action/cart.action';

const useStyles = makeStyles((theme) => ({
  link:{
    "&:hover":{
      textDecoration:"none",
    }
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 1),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  butt:{
    justifyContent: "space-between",
    display: "flex",
  }
  }));

const Subcatagory = (props) =>{

    const classes = useStyles();
    const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector(state => state.cartData);

  const viewdetail = (value)=>
  {
    history.push(`products/${value}`);
  }

    const cartAdd = (value) =>
    {
        const cartProduct = value;
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

    
    return(
        <>

<Card className={classes.card}>
                  <Link to={{ pathname: `products/${props.value.id}` }}>
                  <CardMedia
                    className={classes.cardMedia}
                    //image="https://source.unsplash.com/random"
                    image={props.value.image}
                    title="Image title"
                  />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" style={{display: "flex",justifyContent: "space-between"}}>
                      {props.value.category.toUpperCase()}
                      <h8 style={{color:"#f49f0b"}} align="right">
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarHalfIcon/>
                      </h8>
                    </Typography>
                    <Typography hidden={false} style={{paddingTop: 10,paddingBottom: 10}}>
                      {props.value.title}
                    </Typography>
                    <Typography hidden={false} style={{paddingBottom: 10}}>
                      <span style={{textDecoration: "line-through",color: "#999"}}>${props.value.price+100}</span>  ${props.value.price}
                    </Typography>
                    <Typography hidden={false} className={classes.butt}>
                        <Button variant="contained" color="secondary" onClick={()=>cartAdd(props.value)}>
                            Add To Cart
                          </Button>
                          <Button variant="contained" color="secondary" onClick={()=>viewdetail(props.value.id)}>
                            Product Detail
                          </Button>
                    </Typography>
                  </CardContent>
                </Card>
        </>    
    )
}

export default Subcatagory
