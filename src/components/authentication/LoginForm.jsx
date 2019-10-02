import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Form.css";
import AuthService from "./Auth";
import MainLayout from "../layout/MainLayout";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.state = {
            name: "",
            surname: "",
            email: "",
            password: "",
            confirmedPassword: "",
            color: ""
        };
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const colors = ['red', 'yellow', 'blue', 'green'];
        const name = this.state.name;
        const surname = this.state.surname;
        const email = this.state.email;
        const password = this.state.password;
        const confirmedPassword = this.state.confirmedPassword;
        let color = colors[Math.floor(Math.random() * colors.length)]
        this.service.signup(name, surname, email, password, confirmedPassword, color)
            .then(response => {
                console.log(response)
                this.setState({
                    name: "",
                    surname: "",
                    email: "",
                    password: "",
                    confirmedPassword: "",
                    color: ""
                });
                this.props.history.push('/user/questionaire')
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
                    </form>

                    <p>Don't have an account?
                        <Link to={"/signup"} style={{color: 'rgb(5, 5, 5)', textDecoration: "underline"}}> Sign
                            up</Link>
                    </p>
                </div>
            </MainLayout>
        )
    }
}