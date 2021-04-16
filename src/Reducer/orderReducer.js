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
            const val = action.payload.data;
            const pval = state.ordersData;
            pval.push(val)
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