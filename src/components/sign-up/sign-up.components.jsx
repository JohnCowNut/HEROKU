import React from 'react';

import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';


class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassord: '',
        }
    }

    handleSubmit = async event => {
        // make full control form 
        event.preventDefault();
        const { displayName, email, password, confirmPassord } = this.state;
        // check password user
        if (password !== confirmPassord) {
            alert("password don't match")
            this.setState({
                displayName: '',
                email : '',
                password: '',
                confirmPassword: '' 
            })
            return
        }
        // create onAUth
        
        // snap shot on the database  on firebase
        try {
            //data vs traindisnal data
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassord: '',
            })

        } catch (error) {
            console.log(error.message);
        }

        // reset passworld
    }
    handleChange = event => {
        // take name vs value 
        const { name, value } = event.target;
        // take name vs value make this state;

        this.setState({[name]: value})
    }



    render() {
        const { displayName, email, password, confirmPassord } = this.state;
        return (
            <div className ="sign-up">
				<h2 className ="title">I do not have a account</h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit = {this.handleSubmit}>
					<FormInput
						name = "displayName"
						type = "text"
						required
						label = "displayName"
						handleChange = {this.handleChange}
						value  = {displayName}
					/>
					<FormInput
						name = "email"
						type = "email"
						required
						label = "Email"
						handleChange = {this.handleChange}
						value  = {email}
					/>
					<FormInput
						name = "password"
						type = "password"
						required
						label = "password"
						handleChange = {this.handleChange}
						value  = {password}
					/>
					<FormInput
						name = "confirmPassord"
						type = "password"
						required
						label = "confirmPassord"
						handleChange = {this.handleChange}
						value  = {confirmPassord}
					/>
					<CustomButton type="submit">Sign Up</CustomButton> 
				</form>
			</div>
        )
    }
}
export default SignUp;