import React from 'react';
import Drawer from '../../Component/Layout/Drawer'
import SimpleSlider from '../slider'
import Head from './Head'
import Body from './Body'
import Followus from '../../Component/Layout/Followus'
import Footer from '../../Component/Layout/Footer'

const Faq = () => 
{
    return(
    <>
    <Drawer/>
    <SimpleSlider name="faq"/>
    <div style={{backgroundColor: "#f8f8f8"}}>
    <Head/>
    </div>
    <div style={{backgroundColor:"white"}}>
    <Body/>
    </div>
    <Followus/>
    <Footer/>
    </>
    )
}

export default Faq