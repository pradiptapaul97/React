import {productConstant} from './actionConst'
import axios from 'axios'

export const products = (cid) =>
{
    return async (dispatch) =>
    {
        dispatch({type:`${productConstant.PRODUCT_ALL}_REQUEST`});
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            const person=res.data;
            dispatch({type:`${productConstant.PRODUCT_ALL}_SUCCESS`,payload:{data:person}});
        })
        .catch((error)=>
        {
            dispatch({type:`${productConstant.PRODUCT_ALL}_FAIL`});
        })

    }
}

export const productsfilter = () =>
{
    return async (dispatch) =>
    {
        dispatch({type:`${productConstant.PRODUCT_FILTER}_REQUEST`});
        axios.get("https://fakestoreapi.com/products?limit=9")
        .then((res)=>{
            const person=res.data;
            dispatch({type:`${productConstant.PRODUCT_FILTER}_SUCCESS`,payload:{data:person}});
        })
        .catch((error)=>
        {
            dispatch({type:`${productConstant.PRODUCT_FILTER}_FAIL`});
        })
    }
}

export const catagory = () =>
{
    return async (dispatch) =>
    {
        dispatch({type:`${productConstant.PRODUCT_CATAGORY}_REQUEST`});
        axios.get("https://fakestoreapi.com/products/categories")
        .then((res)=>{
            const person=res.data;
            dispatch({type:`${productConstant.PRODUCT_CATAGORY}_SUCCESS`,payload:{data:person}});
        })
        .catch((error)=>
        {
            dispatch({type:`${productConstant.PRODUCT_CATAGORY}_FAIL`});
        })

    }
}

export const subcatagory = (sub) =>
{
    return async (dispatch) =>
    {
        dispatch({type:`${productConstant.PRODUCT_SUBCATAGORY}_REQUEST`});
        axios.get(`https://fakestoreapi.com/products/category/${sub}`)
        .then((res)=>{
            const person=res.data;
            dispatch({type:`${productConstant.PRODUCT_SUBCATAGORY}_SUCCESS`,payload:{data:person}});
        })
        .catch((error)=>
        {
            dispatch({type:`${productConstant.PRODUCT_SUBCATAGORY}_FAIL`});
        })

    }
}


export const productdetails = (pid) =>
{
    return async (dispatch) =>{
    dispatch({type:`${productConstant.PRODUCT_DETAILS}_REQUEST`});
    axios.get(`https://fakestoreapi.com/products/${pid}`)
    .then((res)=>{
        const pdata = res.data;
        dispatch({type:`${productConstant.PRODUCT_DETAILS}_SUCCESS`,payload:{data:pdata}});
    })
    .catch((error)=>{
        dispatch({type:`${productConstant.PRODUCT_DETAILS}_FAIL`});
    })
    }

}