import {authConstant} from '../Action/actionConst';
import { toast } from 'react-toastify';

const initState={
	firstname:'',
	lastname:'',
	email:'',
	password:'',
	authentiCated:false,
	authenticating:"",
	rsuccess:false,
	message:''
}
const AuthReducers=(state=initState,action)=>{
	switch(action.type){
        case `${authConstant.USER_REGISTER}_REQUEST`:
        return {
            ...state
        }
        case `${authConstant.USER_REGISTER}_SUCCESS`:
            const al = action.payload.message;
            toast.success(al,{autoClose:2000});
        return state={
            ...state,
            rsuccess:true,
            message:action.payload.message
        }

        case `${authConstant.USER_REGISTER}_FAILURE`:
            const ral = action.payload.error;
            toast.error(ral,{autoClose:2000})
        return state={
            ...state,
            error:action.payload.error
        }

        case `${authConstant.USER_LOGIN}_REQUEST`:
        return {
            ...state
        }
        case `${authConstant.USER_LOGIN}_SUCCESS`:
            const all = action.payload.message;
            toast.success(all,{autoClose:2000});
        return state={
            ...state,
            authentiCated:true,
            authenticating:action.payload.userToken,
            message:action.payload.message
        }

        case `${authConstant.USER_LOGIN}_FAILURE`:
            const lal = action.payload.error;
            toast.error(lal,{autoClose:2000})
        return state={
            ...state,
            error:action.payload.error
        }

        case `${authConstant.USER_LOGOUT}_REQUEST`:
        return {
            ...state
        }
        case `${authConstant.USER_LOGOUT}_SUCCESS`:
            const allo = action.payload.message;
            toast.success(allo,{autoClose:2000});
        return state={
            ...state,
            authentiCated:false,
            authenticating:"",
            message:action.payload.message
        }

        case `${authConstant.USER_LOGOUT}_FAILURE`:
        return state={
            ...state,
            error:action.payload.error
        }

        default:
            return state;
	}

}

export default AuthReducers;