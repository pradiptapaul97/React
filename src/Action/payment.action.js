import {paymentConstant} from './actionConst'

export const selectPayment = (data) =>
{
    return async (dispatch) =>{
        dispatch({type:`${paymentConstant.PAYMENT_ADD}_REQUEST`});
        const token = sessionStorage.getItem('token');
        if(token !== null)
        {
            dispatch({type:`${paymentConstant.PAYMENT_ADD}_SUCCESS`,payload:{data:data}});
        }
        else
        {
            dispatch({type:`${paymentConstant.PAYMENT_ADD}_FAILURE`});
        }

    }
}