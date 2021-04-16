import {paymentConstant} from '../Action/actionConst'

const initialState = {
    paymentData:{}
}


const paymentReducer = (state=initialState,action) =>
{
    switch (action.type) {
        case `${paymentConstant.PAYMENT_ADD}_REQUEST`:
            return state = {
                ...state,
            }
        case `${paymentConstant.PAYMENT_ADD}_SUCCESS`:
            const up = action.payload.data;
            return state = {
                ...state,
                paymentData:up,
            }

        case `${paymentConstant.PAYMENT_ADD}_FAILURE`:
            return state = {
                ...state,
            }
    
        default:
            return state;
    }

}

export default paymentReducer