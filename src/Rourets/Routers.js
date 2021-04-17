import React from "react";
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import Home from '../Default/Home/Home'
import Contact from '../Default/Contact/Contact'
import About from '../Default/About/About'
import Faq from '../Default/Faq/Faq'
import Login from '../Component/Auth/Login'
import Register from '../Component/Auth/Register'
import ProtectedRoute from '../API/ProtectedRoute'
import Data from '../Protect/data'
import Products from '../Component/Product/Products/Products'
import ProductDetail from '../Component/Product/ProductDetails/Product'
import Cart from '../Protect/cart/cart'
import SetAddress from '../Protect/address/setAddress'
import Review from '../Protect/address/Review'
import Catagory from '../Component/Product/Catagory/Catagory'
import Subcatagory from '../Component/Product/Subcatagory/Subcatagory'
import Payment from '../Protect/address/Payment'
import OrderDone from '../Protect/address/OrderDone'
import UnProtectedRoute from '../API/UnProtectedRoute'
import Customer from '../Default/Customer/Customer'
import Error from '../Extra/Error'
import { ToastContainer } from 'react-toastify';
import Profile from '../Protect/User/Profile'
import Account from '../Protect/User/Account'
import Orders from '../Protect/User/Order/Orders'

const Routers = () => 
{
    return(
        <>
        <Router>
        <ToastContainer />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/faq" component={Faq}></Route>
                <Route exact path="/customer-service" component={Customer}></Route>
                <Route exact path="/products/:detail" component={ProductDetail}></Route>
                <Route exact path="/catagory/products/:detail" component={ProductDetail}></Route>
                <Route exact path="/products" component={Products}></Route>
                <Route exact path="/catagory" component={Catagory}></Route>
                <Route exact path="/catagory/:subcata" component={Subcatagory}></Route>
                <ProtectedRoute exact path="/cart" component={Cart}></ProtectedRoute>
                <ProtectedRoute path="/address" component={SetAddress} />
                <ProtectedRoute path="/data" component={Data} />
                <ProtectedRoute path="/paymet" component={Payment} />
                <ProtectedRoute path="/review" component={Review} />
                <ProtectedRoute path="/orderdone" component={OrderDone} />
                <ProtectedRoute path="/profile" component={Profile} />
                <ProtectedRoute path="/account" component={Account} />
                <ProtectedRoute path="/orders" component={Orders} />

                <UnProtectedRoute exact path="/login" component={Login}></UnProtectedRoute>
                <UnProtectedRoute exact path="/register" component={Register}></UnProtectedRoute>

                <Route render={() => <Error/>} />
            </Switch>
        </Router>
        </>
    )
}

export default Routers