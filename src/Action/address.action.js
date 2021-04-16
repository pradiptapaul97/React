import {addressConstant} from './actionConst';

export const saveAddress = (address) =>
{
    return async (dispatch) =>{
        dispatch({type:`${addressConstant.ADDRESS_ADD}_REQUEST`});


        const token = sessionStorage.getItem('token');
        if(token !== null)
        {
            dispatch({type:`${addressConstant.ADDRESS_ADD}_SUCCESS`,payload:{data:address}});
        }
        else{
            dispatch({type:`${addressConstant.ADDRESS_ADD}_FAILURE`});
        }

    }
}

export const selectAddress = (address) =>
{
    return async (dispatch) =>{
        dispatch({type:`${addressConstant.ADDRESS_DELEVERY}_REQUEST`});


        const token = sessionStorage.getItem('token');
        if(token !== null)
        {
            dispatch({type:`${addressConstant.ADDRESS_DELEVERY}_SUCCESS`,payload:{data:address}});
        }
        else{
            dispatch({type:`${addressConstant.ADDRESS_DELEVERY}_FAILURE`});
        }

    }
}