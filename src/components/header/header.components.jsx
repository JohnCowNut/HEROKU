import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropDown from '../cart-dropdown/cart-dropdown.components';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from "../../redux/cart/car.selectors";
import {selectCurrentUser} from '../../redux/user/user.selector';
const Header = ({ currentUser,hidden }) => {
    //console.log(currentUser);

    return (
        <div className ="header">
		<Link className="logo-container" to ="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				Shop
			</Link>
			<Link className="option" to="/shop">
				Contact
			</Link>
			{
						currentUser ? 
						(<div className = 'option' onClick = { ()=> auth.signOut()}>
				  	SIGN OUT
						</div>)
						:
						(<Link className = 'option' to = '/signIn'>SIGN IN</Link>)
					}
			<CartIcon/>
		</div>

		{
			hidden ? null : <CartDropDown/>
		}
		
	</div>
    )
}

//createStructuredSelector using for mutiple state automatic top level state redux 
//selectCurrentUser(state)
const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})
export default connect(mapStateToProps)(Header)