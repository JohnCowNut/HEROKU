import CartActionTypes from './car.types';
import { addItemToCart } from './cart.utils';
import {decreaseAmount} from './cart.utils';
const INITIAL_STATE = {
    hidden: true,
    cartItem: []
}
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItem: addItemToCart(state.cartItem, action.payload)
            }
        case CartActionTypes.CEAR_ITEM_FROM_CART:
            return {
            	...state,
            	cartItem: state.cartItem.filter(el => el.id !== action.payload.id)
            }
        case CartActionTypes.DECREASE_QUANTITY: 
            return {
                ...state,
                cartItem: decreaseAmount(state.cartItem,action.payload)
            }
        default:
            return state;
    }
}
export default cartReducer;