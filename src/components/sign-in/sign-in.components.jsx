import React from 'react';
import FormInput from '../form-input/form-input.components';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.components';
import {signInWithGoogle,auth} from '../../firebase/firebase.utils';
class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email : '',
			password: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();
		const {email,password} = this.state;
		try {
			await auth.signInWithEmailAndPassword(email,password)
			this.setState({name:'', password:''})
		}catch (error) {
			console.log(error)
		}

		
	}

	handleChange = event => {
		const {value,name} = event.target;
		//console.log(event.target)
		this.setState({[name]: value})
	}


	render() {
		return (
			<div className= "sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput 
					 name="email"
					 type ="email"
					 label="Email"
					 handleChange = {this.handleChange}
					 value={this.state.email} 
					 required
					 />
					
					<FormInput 
						name="password" 
						label="Password"
						type ="password"
						handleChange = {this.handleChange}
					 	value={this.state.password} 
					 	required
					 />
					 

					<div className ='buttons'>

						<CustomButton type='submit'>SignIn</CustomButton>
						<CustomButton google onClick = {signInWithGoogle}>Sign In with Google</CustomButton>

					</div>
				</form>
			</div>
		)
	}
}
export default SignIn;