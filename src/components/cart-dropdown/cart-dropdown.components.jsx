import React from 'react';
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.components';
import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.components';
import {selectCartItem} from '../../redux/cart/car.selectors';
import  {toggleCartHidden} from '../../redux/cart/cart.action';
const CartDropDown= ({cartItem,history,dispatch}) => (
	<div className = 'cart-dropdown'>
		<div className={`${(cartItem.length >3) ? "cart-items": "hidden"}`}>
			{
				cartItem.length ? 
				(cartItem.map(el => <CartItem key={el.id} item={el}/>))
				:
				(<span className="empty-message">Your cart Empty</span>)
			}
		</div>
		<CustomButton 
		onClick ={() => 
			{history.push("/checkout");
			dispatch(toggleCartHidden())}}>
		GO TO CHECKOUT</CustomButton>
	</div>
) 

const mapStateToProps = state  => ({
	cartItem : selectCartItem(state)
})
// const mapDispatchToProps = dispatch => ({
// 	toggleCartHidden: () => dispatch(toggleCartHidden())
// })


export default withRouter(connect(mapStateToProps)(CartDropDown));