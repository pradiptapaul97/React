import {cartConstant} from './actionConst';

export const addCart = (data) =>{
    return async (dispatch) =>{
        dispatch({type:`${cartConstant.CART_ADD}_REQUEST`});
        const token = sessionStorage.getItem('token');
        if(token !== null)
        {
            dispatch({type:`${cartConstant.CART_ADD}_SUCCESS`,payload:{data:data}});
        }
        else
        {
            dispatch({type:`${cartConstant.CART_ADD}_FAILURE`});
        }

    }
}

export const minusCart = (data) =>{
    return async (dispatch) =>{
        dispatch({type:`${cartConstant.CART_DECREASE}_REQUEST`});
        const token = sessionStorage.getItem('token');
        if(token !== null)
        {
            dispatch({type:`${cartConstant.CART_DECREASE}_SUCCESS`,payload:{data:data}});
        }
        else
        {
            dispatch({type:`${cartConstant.CART_DECREASE}_FAILURE`});
        }

    }
}

export const delData = (data) =>{
    return async (dispatch) =>{
        dispatch({type:`${cartConstant.CART_DELETE}_REQUEST`});

        const token = sessionStorage.getItem('token');
        if(token !== null){
            dispatch({type:`${cartConstant.CART_DELETE}_SUCCESS`,payload:{data:data}});
        }
        else
        {
            dispatch({type:`${cartConstant.CART_DELETE}_FAILURE`});
        }
        
    }
}

export const plusCart = (data) =>{
    return async (dispatch) =>{
        dispatch({type:`${cartConstant.CART_INCREASE}_REQUEST`});
        const token = sessionStorage.getItem('token');
        if(token !== null)
        {
            dispatch({type:`${cartConstant.CART_INCREASE}_SUCCESS`,payload:{data:data}});
        }
        else
        {
            dispatch({type:`${cartConstant.CART_INCREASE}_FAILURE`});
        }

    }
}

export const clearCart = () =>{
    return async (dispatch) =>{
        dispatch({type:`${cartConstant.CART_CLEAR}_REQUEST`});
        const token = sessionStorage.getItem('token');
        if(token !== null)
        {
            dispatch({type:`${cartConstant.CART_CLEAR}_SUCCESS`});
        }
        else
        {
            dispatch({type:`${cartConstant.CART_CLEAR}_FAILURE`});
        }

    }
}