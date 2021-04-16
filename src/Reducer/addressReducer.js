import {addressConstant} from '../Action/actionConst';

const initialState = {
    addressData:[],
    deleveryaddressData:[]
}

const addressReducer = (state=initialState,action) =>
{
    switch (action.type) {
        case `${addressConstant.ADDRESS_ADD}_REQUEST`:
            return state = {
                ...state,
            }

        case `${addressConstant.ADDRESS_ADD}_SUCCESS`:
            const datac = action.payload.data;
            const datap  = state.addressData;
            datap.push(datac)
            return state = {
                ...state,
                addressData:[...datap],
            }

        case `${addressConstant.ADDRESS_ADD}_FAILURE`:
            return state = {
                ...state,
            }

            case `${addressConstant.ADDRESS_DELEVERY}_REQUEST`:
                return state = {
                    ...state,
                }
    
            case `${addressConstant.ADDRESS_DELEVERY}_SUCCESS`:
                const dataDc = action.payload.data;
                return state = {
                    ...state,
                    deleveryaddressData:dataDc,
                }
    
            case `${addressConstant.ADDRESS_DELEVERY}_FAILURE`:
                return state = {
                    ...state,
                }
    
        default:
            return state = {
                ...state,
            }
    }
}

export default addressReducer