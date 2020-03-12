import React from 'react';

import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({price})  => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_W3mSAABMuX578FaD5jog1i7300Wbud93IG';
	const onToken = token => {
		console.log(token)
		alert("SUCESS")
	}


	return (

		<StripeCheckout
			label ="Pay Now"
			locale ="vi"
			name = "COWNUT & SAMBI Cs."
			billingAdress
			billingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description = {`Your total ${price}`}
			amount = {priceForStripe}
			panelLabel = "Pay Now"
			token = {onToken}
			stripeKey= {publishableKey}
		 />
	)
}
export default StripeCheckoutButton;