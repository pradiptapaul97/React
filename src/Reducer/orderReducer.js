import {orderConstant} from '../Action/actionConst'

const initialState = {
    ordersData:[]
}

const orderReducer = (state=initialState,action) =>
{
    switch (action.type) 
    {
        case `${orderConstant.ORDER_ADD}_REQUEST`:
            return state = {
                ...state,
            }
        case `${orderConstant.ORDER_ADD}_SUCCESS`:
            const address = action.payload.address;
            const product = action.payload.product;
            const payment = action.payload.payment;
            const pval = state.ordersData;
            pval.push({orders:product,address:address,paymen:payment})

            return state = {
                ...state,
                ordersData:pval
            }

        case `${orderConstant.ORDER_ADD}_FAILURE`:
            return state = {
                ...state,
            }
        default:
            return state;
    }

}

export default orderReducer