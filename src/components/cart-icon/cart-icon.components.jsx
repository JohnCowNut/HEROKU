import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {selectCartItemCount} from '../../redux/cart/car.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';
const CartIcon = ({toggleCartHidden,itemCout}) => (
    <div className = "cart-icon" onClick = {toggleCartHidden}>
		<ShoppingIcon className ="shopping-icon"/>
		<span className="item-count">{itemCout}</span>
	</div>
)
const mapDispatchToProps  = dispatch => ({
	toggleCartHidden: ()=> (dispatch(toggleCartHidden()))
})
const mapStateToProps = state => ({
	itemCout : selectCartItemCount(state)
})
	 
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);