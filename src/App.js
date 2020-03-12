import React from 'react';
import HomePage from './pages/homepage/homepage.components';
import { Switch, Route,Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector';

import CheckoutPage from './pages/checkout/checkout.components';


class App extends React.Component {


    unsubscribeFromAuth = null;
    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {


            //const snapShot = await userRef.get();
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })


                })
            } else {
                setCurrentUser({ currentUser: userAuth })
            }

            //console.log(snapShot);

        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
        // console.log("LALALA")
    }
    render() {
        return (
            <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path ="/shop" component ={ShopPage}/>
                <Route  exact path="/checkout" component= {CheckoutPage}/>
                <Route  exact path ="/signIn" 
                             render= {() => this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage/>}/>
            </Switch>
        </div>
        );
    }
}

const mapStateToprops = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToprops, mapDispatchToProps)(App);