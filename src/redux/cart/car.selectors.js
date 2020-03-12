import {createSelector} from 'reselect';

const selectCart  = state => state.cart;


export const selectCartItem = createSelector(
	[selectCart],
	cart => cart.cartItem
)
export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
)
export const selectCartItemCount = createSelector(
	[selectCartItem],
	cartItem => cartItem.reduce((accumulated,el)=>accumulated + el.quantity ,0)
)
export const selectCartTotal = createSelector(
	[selectCartItem],
	cartItem => cartItem.reduce((accumulated,el)=>((accumulated + el.quantity)*el.price) ,0)
)
