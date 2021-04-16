import {authConstant} from './actionConst';
import axios from 'axios';

export const signUp=(user)=>{
    return async (dispatch)=>{
    
        //action Request send to the server
    dispatch({type:`${authConstant.USER_REGISTER}_REQUEST`});
    axios.post(`https://api09.herokuapp.com/register`,user).then((res)=>{
        const msg=res.data.message
        
        //Success action generated
        //dispatch(actionType,paylode(opt))
    dispatch({type:`${authConstant.USER_REGISTER}_SUCCESS`,payload:{message:msg}})
    
    }).catch((err)=>{
        //Failure action generated
    dispatch({type:`${authConstant.USER_REGISTER}_FAILURE`,payload:{error:"Registration Fail"}})
        })
    }
}

export const signIn=(user)=>{
    return async (dispatch)=>{
    
        //action Request send to the server
    dispatch({type:`${authConstant.USER_LOGIN}_REQUEST`});
    axios.post(`https://api09.herokuapp.com/login`,user).then((res)=>{
        const msg=res.data.message
        //window.localStorage.setItem('token',res.data.token)
        window.sessionStorage.setItem('token',res.data.token)
        window.sessionStorage.setItem('email',res.data.email);
        window.sessionStorage.setItem('name',res.data.full_name);
        
        //Success action generated
        //dispatch(actionType,paylode(opt))
    dispatch({type:`${authConstant.USER_LOGIN}_SUCCESS`,payload:{message:msg,userToken:res.data.token}})
    
    }).catch((err)=>{
        //Failure action generated
    dispatch({type:`${authConstant.USER_LOGIN}_FAILURE`,payload:{error:"Login Failure"}})
        })
    }
}

export const logout=(user)=>{
    return async (dispatch)=>{
        //Request send to the server
        dispatch({type:`${authConstant.USER_LOGOUT}_REQUEST`});
        if(sessionStorage.getItem('token')!==""){
            sessionStorage.clear();
            dispatch({type:`${authConstant.USER_LOGOUT}_SUCCESS`,payload:{message:"logout "}})
        }else{
            dispatch({type:`${authConstant.USER_LOGOUT}_FAILURE`,payload:{message:"failed"}})
        }
    
    }
    }