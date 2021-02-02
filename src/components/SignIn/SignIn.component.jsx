import React, { Component } from 'react'
import CustomButton from '../button/Button.component'
import FormInput from '../formInput/FormInput.component'
import './SignIn.style.scss'
export default class SignIn extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:''
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({email:"",password:""});
    }
    handleChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>
                <form action={this.handleSubmit}>
                    <FormInput type="email" id="email" name="email" value={this.state.email} label="email" required handleChange={this.handleChange}/>
                   
                    <FormInput type="password" id="password" name="password" value={this.state.password} label="password" required handleChange={this.handleChange}/>
                   
                    <CustomButton type="submit" >Sign In</CustomButton>
                </form>
                
            </div>
        )
    }
}
