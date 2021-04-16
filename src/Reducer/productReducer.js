import {productConstant} from '../Action/actionConst'

const initialState = {
    catagory:[],
    subcatagory:[],
    productData:[],
    singleData:{},
    filter:[],
    loading:true
}

const ProductReducers=(state=initialState,action)=>
{
    switch (action.type) {
        case `${productConstant.PRODUCT_ALL}_REQUEST`:
            return state = {
                ...state,
                loading:true
            }

        case `${productConstant.PRODUCT_ALL}_SUCCESS`:
            return state = {
                ...state,
                productData:action.payload.data,
                loading:false
            }

        case `${productConstant.PRODUCT_ALL}_FAIL`:
            return state={
                ...state
            }

        case `${productConstant.PRODUCT_CATAGORY}_REQUEST`:
            return state = {
                ...state,
                loading:true
            }

        case `${productConstant.PRODUCT_CATAGORY}_SUCCESS`:
            return state = {
                ...state,
                catagory:action.payload.data,
                loading:false
            }

        case `${productConstant.PRODUCT_CATAGORY}_FAIL`:
            return state={
                ...state
            }

            case `${productConstant.PRODUCT_FILTER}_REQUEST`:
                return state = {
                    ...state,
                    loading:true
                }
    
            case `${productConstant.PRODUCT_FILTER}_SUCCESS`:
                return state = {
                    ...state,
                    filter:action.payload.data,
                    loading:false
                }
    
            case `${productConstant.PRODUCT_FILTER}_FAIL`:
                return state={
                    ...state
                }

        case `${productConstant.PRODUCT_SUBCATAGORY}_REQUEST`:
            return state = {
                ...state,
                loading:true
            }

        case `${productConstant.PRODUCT_SUBCATAGORY}_SUCCESS`:
            return state = {
                ...state,
                subcatagory:action.payload.data,
                loading:false
            }

        case `${productConstant.PRODUCT_SUBCATAGORY}_FAIL`:
            return state={
                ...state
            }

        case `${productConstant.PRODUCT_DETAILS}_REQUEST`:
            return state = {
                ...state,
                loading:true
            }

        case `${productConstant.PRODUCT_DETAILS}_SUCCESS`:
            return state = {
                ...state,
                singleData:action.payload.data,
                loading:false
            }

        case `${productConstant.PRODUCT_DETAILS}_FAIL`:
            return state = {
                ...state
            }
    
        default:
            return state;
    }
}

export default ProductReducers