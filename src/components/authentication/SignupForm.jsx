import React, {Component} from 'react';
import './Form.css';
import {Link} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthService from "../authentication/Auth";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.state = {
            name: "",
            surname: "",
            email: "",
            password: ""};
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const surname = this.state.surname;
        const email = this.state.email;
        const password = this.state.password;
        const colors=['green','red','yellow','blue']
        let color=colors[Math.floor(Math.random()*colors.length)]
        this.service.signup(name, surname, email, password,color)
            .then(response => {
                console.log(response)
                this.setState({
                    name: "",
                    surname: "",
                    email: "",
                    password: ""
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
                        <h3>Sign up</h3>
                        <div id="form-frame">
                            <div id="form-group">
                                <label>Name:</label>
                                <input type="text" name="name" value={this.state.name}
                                       onChange={e => this.handleChange(e)}/>
                            </div>
                            <div id="form-group">
                                <label>Surname:</label>
                                <input type="text" name="surname" value={this.state.surname}
                                       onChange={e => this.handleChange(e)}/>
                            </div>
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
                        <button className="submitBtn" type="submit">Sign up</button>

                        <span>Already have an account? 
                            <Link to={"/login"} class="a">Log in</Link>
                        </span>
                    </form>
                </div>
            </MainLayout>
        )
    }
}
