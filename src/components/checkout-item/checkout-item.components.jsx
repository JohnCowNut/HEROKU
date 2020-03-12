import React from 'react';
import './checkout-item.styles.scss';
import {removeItem,addItem,decreaseQuantity} from '../../redux/cart/cart.action';
import {connect} from 'react-redux';
	const CheckoutItem = ({cartItem,removeItem,decreaseQuantity,addItem}) => {
			const  {name,quantity,price,imageUrl} =cartItem;
		return (
		<div className = "checkout-item">
			<div className="image-container">
				<img alt="item"  src={imageUrl}/>
			</div>
			<span className="name">{name}</span>			
			<span className="quantity">
				<div className= "arrow" onClick={()=>decreaseQuantity(cartItem)}>&#10094;</div>
				{quantity}
				<div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
			</span>
			<span className="price">{price}</span> 
			<div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
		</div>
		)}
const mapDispatchToProps = dispatch => ({
	removeItem: item => dispatch(removeItem(item)),
	decreaseQuantity: item => dispatch(decreaseQuantity(item)),
	addItem: item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem);	