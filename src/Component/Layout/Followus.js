import React from "react";
import Slider from "react-slick";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import './styles.css'


const useStyles = makeStyles((theme) => ({
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
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
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

    var sliderv = ["../../slier/buttomslider1.jpg","../../slier/buttomslider2.jpg","../../slier/buttomslider3.jpg","../../slier/buttomslider4.jpg","../../slier/buttomslider5.jpg","../../slier/buttomslider6.jpg","../../slier/buttomslider7.jpg","../../slier/buttomslider8.jpg","../../slier/buttomslider9.jpg","../../slier/buttomslider10.jpg"];


    return (
      <div style={{lineHeight:0}}>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
            <InstagramIcon/> FOLLOW US ON @DIPTA
                </Typography>
            </Container>
            </div>
            <Slider {...settings} className="foot">
            {sliderv.map((e,index)=>(
                <div key={index} style={{position:"relative"}}>
                    <img width="100%" src={e} alt="ami" key={index}/>
                </div>
            ))}
            </Slider>
      </div>
    );
}