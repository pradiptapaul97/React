import React,{useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import {useSelector,useDispatch} from 'react-redux';
import {productsfilter} from '../../Action/product.action'
import {FullWidthGrid} from './Loading'
import {Link,useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { addCart } from '../../Action/cart.action';

const useStyles = makeStyles((theme) => ({
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

export default function Album() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector(state => state.cartData);

  useEffect(()=>{
    dispatch(productsfilter());
  },[dispatch])

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

  const data = useSelector(state => state.product)

  const viewdetail = (value)=>
  {
    history.push(`products/${value}`);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            See Our Collection
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Recent Products
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} >
          {/* End hero unit */}
          <Grid container spacing={4}>
          {data.loading === true ? (<FullWidthGrid page="product"/>) : (
            data.filter.map((value,id) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Link to={{ pathname: `products/${value.id}` }}>
                  <CardMedia
                    className={classes.cardMedia}
                    //image="https://source.unsplash.com/random"
                    image={value.image}
                    title="Image title"
                  />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" style={{display: "flex",justifyContent: "space-between"}}>
                      {value.category.toUpperCase()}
                      <h8 style={{color:"#f49f0b"}} align="right">
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarHalfIcon/>
                      </h8>
                    </Typography>
                    <Typography hidden={false} style={{paddingTop: 10,paddingBottom: 10}}>
                      {value.title}
                    </Typography>
                    <Typography hidden={false} style={{paddingBottom: 10}}>
                      <span style={{textDecoration: "line-through",color: "#999"}}>${value.price+100}</span>  ${value.price}
                    </Typography>
                    <Typography hidden={false} className={classes.butt}>
                        <Button variant="contained" color="secondary" onClick={()=>cartAdd(value)}>
                            Add To Cart
                          </Button>
                          <Button variant="contained" color="secondary" onClick={()=>viewdetail(value.id)}>
                            Product Detail
                          </Button>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}