import React, { Component } from 'react';
import './Form.css';
import {Link} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthService from "../authentication/Auth";

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.formRef = React.createRef();
    this.state = {  name: "",
                    surname:"",
                    email:"",
                    password: "",
                    confirmedPassword:""};
    this.service= new AuthService();
  }  
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const surname = this.state.surname;
    const email = this.state.email;
    const password=this.state.password;
    const confirmedPassword= this.state.confirmedPassword;
    this.service.signup(name,surname,email,password, confirmedPassword)
    .then( response => {
      console.log(response)
        this.setState({ name: "",
                        surname:"",
                        email:"",
                        password: "",
                        confirmedPassword:""
                      });
        this.props.history.push('/user/profile')
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <MainLayout>
        <div className="signupForm">
          <h3>Sign up</h3>
          <form className="signupForm__input" onSubmit={this.handleFormSubmit}>

            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
            
            <label>Surname:</label>
            <input type="text" name="surname" value={this.state.surname} onChange={ e => this.handleChange(e)}/>
            
            <label>Email:</label>
            <input type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
            
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
            
            <label>Confirm Password:</label>
            <input type="password" name="confirmedPassword" value={this.state.confirmedPassword} onChange={ e => this.handleChange(e)} />
            
            <button className="submitBtn" type="submit">Sign up</button>
        </form>

        <p>Already have an account? 
            <Link to={"/login"} style={{ color: 'rgb(5, 5, 5)', textDecoration:"underline" }}> Log in</Link>
        </p>
        </div>
      </MainLayout>
    )
  }
}
