import {combineReducers} from 'redux';
import AuthReducers from './authreducers';
import ProductReducers from './productReducer';
import cartReducer from './cartReducer';
import addressReducer from './addressReducer';
import paymentReducer from './paymentReducer';
import orderReducer from './orderReducer';

const rootReducer=combineReducers(
{
	authData:AuthReducers,
	product:ProductReducers,
	cartData:cartReducer,
	address:addressReducer,
	payment:paymentReducer,
	orders:orderReducer
}
)

export default rootReducer;