import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Form.css";
import AuthService from "./Auth";
import MainLayout from "../layout/MainLayout";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        this.service.login(email, password)
            .then(response => {
                console.log(response)
                this.setState({
                    email: "",
                    password: ""
                });
                this.props.history.push('/user/dashboard')
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <MainLayout>
                <div className="signupForm">
                    <form className="signupForm__input" onSubmit={this.handleFormSubmit}>
                        <h3>Log in</h3>
                        <div id="form-frame">
                            <div id="form-group">
                                <label>Email:</label>
                                <input type="text" name="email" value={this.state.email}
                                       onChange={e => this.handleChange(e)}/>
                            </div>
                            <div id="form-group">
                                <label>Password:</label>
                                <input type="password" name="password" value={this.state.password}
                                       onChange={e => this.handleChange(e)}/>
                            </div>
                        </div>
                        <button className="submitBtn" type="submit">Log in</button>

                        <span>Don't have an account? 
                            <Link to={"/signup"} class="a">Sign up</Link>
                        </span>
                    </form>
                </div>
            </MainLayout>
        )
    }
}