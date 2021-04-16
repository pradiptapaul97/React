import React from 'react'
import { Redirect } from 'react-router-dom'

const UnProtectedRoute = (props) => {

    const Component = props.component;
    const isAuthenticated = sessionStorage.getItem('token');
       
     return isAuthenticated ? (<Redirect to={{ pathname: '/' }} />) : (<Component />);
}

export default UnProtectedRoute;