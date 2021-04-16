import {cartConstant} from '../Action/actionConst';
import { toast } from 'react-toastify';

const initialState = {
    products:[]
}

const cartReducer = (state=initialState,action) =>
{
    switch (action.type) {
        case `${cartConstant.CART_ADD}_REQUEST`:
            return state = {
                ...state,
            }
        case `${cartConstant.CART_ADD}_SUCCESS`:
            const up = action.payload.data;
            toast.success("Product Added",{autoClose:2000})
            return state = {
                ...state,
                products:up,
            }

        case `${cartConstant.CART_ADD}_FAILURE`:
            return state = {
                ...state,
            }

        case `${cartConstant.CART_CLEAR}_REQUEST`:
            return state = {
                ...state,
            }
        case `${cartConstant.CART_CLEAR}_SUCCESS`:
            return state = {
                ...state,
                products:[],
            }

        case `${cartConstant.CART_CLEAR}_FAILURE`:
            return state = {
                ...state,
            }
        case `${cartConstant.CART_INCREASE}_REQUEST`:
            return state = {
                ...state,
            }
        case `${cartConstant.CART_INCREASE}_SUCCESS`:
            const cid = action.payload.data.id;
            const cdata  = state.products;
            toast.success("Product Increment",{autoClose:2000})

            const cdat = cdata.map(e =>
                e.id === cid ?
                {...e,quantity:e.quantity+1}
                :e)
            return state = {
                ...state,
                products:cdat,
            }
        case `${cartConstant.CART_INCREASE}_FAILURE`:
            return state = {
                ...state,
            }
        case `${cartConstant.CART_DECREASE}_REQUEST`:
            return state = {
                ...state,
            }
        case `${cartConstant.CART_DECREASE}_SUCCESS`:
            const cdid = action.payload.data.id;
            // const cdprce = action.payload.data.price;
            const cdData  = state.products;
            toast.success("Product Decremet",{autoClose:2000})

            const cdDat = cdData.map(e =>
                e.id === cdid ?
                {...e,quantity:e.quantity-1}
                :e)

        const deldata = cdDat.filter(e => e.quantity>0)

            return state = {
                ...state,
                products:deldata,
            }
        case `${cartConstant.CART_DECREASE}_FAILURE`:
            return state = {
                ...state,
            }

        case `${cartConstant.CART_DELETE}_REQUEST`:
            return state = {
                ...state,
            }
        case `${cartConstant.CART_DELETE}_SUCCESS`:
            const cdelid = action.payload.data.id;
            const cdelData  = state.products;

        const cdeldata = cdelData.filter(e => e.id!==cdelid)
        toast.success("Removed From Cart",{autoClose:2000});

            return state = {
                ...state,
                products:cdeldata,
            }
        case `${cartConstant.CART_DELETE}_FAILURE`:
            return state = {
                ...state,
            }


        default:
            return state;
    }
}

export default cartReducer