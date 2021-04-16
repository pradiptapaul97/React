import React from 'react';
import Drawer from '../../Component/Layout/Drawer'
import SimpleSlider from '../slider'
import Head from './Head'
import Body from './Body'
import Followus from '../../Component/Layout/Followus'
import Footer from '../../Component/Layout/Footer'
import Clintslider from '../Home/Clintslider'

const About = () => 
{
    return(
    <>
    <Drawer/>
    <SimpleSlider name="about"/>
    <div style={{backgroundColor: "#f8f8f8"}}>
    <Head/>
    </div>
    <div style={{backgroundColor:"white"}}>
    <Body/>
    </div>
    <Clintslider/>
    <Followus/>
    <Footer/>
    </>
    )
}

export default About