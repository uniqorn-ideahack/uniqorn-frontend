import React, { Component } from 'react';
import axios from "axios";
import MainLayout from '../components/layout/MainLayout';
import './Questionaire.css';

export default class Questionaire extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
            occupation:"",
            happy:"",
            why:""
        };
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_API}`,
            withCredentials: true,
            headers: {Authorization:"Bearer "+ this.state.user.token}
          });
        this.service=service;
      }
    
      handleFormSubmit = (event) => {
        event.preventDefault();
        const {occupation, happy,why}= this.state;
        const traits=[];
        traits.push(occupation);
        traits.push(happy)
        traits.push(why)
        this.service.post('/traits', {traits})
        .then( response => {
            this.setState({ 
                            occupation: "",
                            happy:"",
                            why:""
                          });
            this.props.history.push('/user/yourbuddy')
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
              <div className="questionaire">
                <h3>Questionaire:</h3>
                <form className="questionaire__input" onSubmit={this.handleFormSubmit}>
      
                  <label>Occupation:</label>
                  <input type="text" name="occupation" value={this.state.occupation} onChange={ e => this.handleChange(e)} />
                  
                  <label>Happy/Sad/Depressed:</label>
                  <input type="text" name="happy" value={this.state.happy} onChange={ e => this.handleChange(e)} />
                  
                  <label>Why you wanna change:</label>
                  <input type="text" name="why" value={this.state.why} onChange={ e => this.handleChange(e)} />

                  <button className="submitBtn" type="submit">Submit</button>
                </form>
              </div>
            </MainLayout>
            )
        }
}
