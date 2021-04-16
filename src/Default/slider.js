import React from "react";
import Slider from "react-slick";
import slider from './slider.json'
import './slider.css'

export default function SimpleSlider(props){


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow:(<button type="button" hidden className="slick-prev">Previous</button>),
        nextArrow:(<button type="button" hidden className="slick-next">Next</button>)
    };

    var sliderv = {};


    switch (props.name) {
        case "home":
            sliderv = slider.homes;
            break;
        
        case "catagory":
            sliderv = slider.catagory;
            break;

        case "contact":
            sliderv = slider.contact;
            break;

        case "about":
            sliderv = slider.about;
            break;

        case "faq":
            sliderv = slider.faq;
            break;
        case "customer":
            sliderv = slider.customer;
            break;
    
        default:
            break;
    }
    return (
      <div>
        <Slider {...settings}>
            {sliderv.map((e)=>(
                <div >
                    <img width="100%" src={e.image} alt={e.name}/>
                </div>
            ))}
        </Slider>
      </div>
    );
}