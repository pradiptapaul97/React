import {orderConstant} from './actionConst'

export const doneOrder = (product,address,payment) =>
{
    return async (dispatch) =>{
        dispatch({type:`${orderConstant.ORDER_ADD}_REQUEST`});
        const token = sessionStorage.getItem('token');
        if(token !== null)
        {
            dispatch({type:`${orderConstant.ORDER_ADD}_SUCCESS`,payload:{product:product,address:address,payment:payment}});
        }
        else
        {
            dispatch({type:`${orderConstant.ORDER_ADD}_FAILURE`});
        }

    }
}