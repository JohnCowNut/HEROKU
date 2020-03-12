import {combineReducers} from 'redux';
import cartReducer from './cart/cart-reducer';
import userReducer from './user/user-reducer';
import shopReducer from './shop/shop.reducer';
import {persistReducer} from 'redux-persist';
import directoryReducer from './directory/directory-reducer';

import storage from 'redux-persist/lib/storage' // local storage
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
const rootReducer =combineReducers ({
	user : userReducer,
	cart : cartReducer,
	directory: directoryReducer,
	shop: shopReducer
})	
export default  persistReducer(persistConfig,rootReducer)
