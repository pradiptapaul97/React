import React from 'react';
import SimpleSlider from '../slider'
import Gridtop from './Gridtop'
import Products from './Products'
import Clintslider from './Clintslider'
import Drawer from '../../Component/Layout/Drawer'
import Footer from '../../Component/Layout/Footer'
import Followus from '../../Component/Layout/Followus'
import Blog from './Blog'
const Home = () =>
{

    return(
        <div styles={{backgroundColor:"black"}}>
        <Drawer/>
        <SimpleSlider name="home"/>
        <Gridtop/>
        <Products/>
        <Clintslider/>
        <Blog/>
        <Followus/>
        <Footer/>
        </div>
    )
}

export default Home