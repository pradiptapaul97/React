import React from "react";
import Slider from "react-slick";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './styles.css';
const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(5),
      margin: 20,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor:"aliceblue;"
      
    },
    avatar:{
        margin: "10px auto",
        width: 70,
        height: 70,
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 0, 1),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
  }));

export default function Clientslider(props){


    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: 'linear',
        prevArrow:(<button type="button" hidden className="slick-prev">Previous</button>),
        nextArrow:(<button type="button" hidden className="slick-next">Next</button>),
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
    };

    var sliderv = ["slier/sliderp1.jpg","slier/sliderp2.jpg","slier/sliderp3.jpg","slier/sliderp4.jpg"];


    return (
      <div>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Testimonials
                </Typography>
                <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                What Clients Says About Us
                </Typography>
            </Container>
            </div>
          <Container className={classes.cardGrid}>
            <Slider {...settings}>
            {sliderv.map((e)=>(
                <div>
                    {/* <img width="100%" src={e.image} alt={e.name}/> */}
                    <Paper elevation={10} className={classes.paper}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Avatar className={classes.avatar} alt="Remy Sharp" src={e}/>
                        <h4>Pradip</h4>
                    </Paper>
                </div>
            ))}
            </Slider>
        </Container>
      </div>
    );
}