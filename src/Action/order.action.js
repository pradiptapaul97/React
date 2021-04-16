import {orderConstant} from './actionConst'

export const doneOrder = (data) =>
{
    return async (dispatch) =>{
        dispatch({type:`${orderConstant.ORDER_ADD}_REQUEST`});
        const token = sessionStorage.getItem('token');
        if(token !== null)
        {
            dispatch({type:`${orderConstant.ORDER_ADD}_SUCCESS`,payload:{data:data}});
        }
        else
        {
            dispatch({type:`${orderConstant.ORDER_ADD}_FAILURE`});
        }

    }
}