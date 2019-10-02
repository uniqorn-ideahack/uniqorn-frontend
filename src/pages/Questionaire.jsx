import React, { Component } from 'react';
import axios from "axios";
import MainLayout from '../components/layout/MainLayout';
import './Questionaire.css';

export default class Questionaire extends Component {
    constructor(props){
        super(props);
        this.state = { color: '', 
                      traits: []};
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_API}`,
            withCredentials: true
          });
        this.service=service;
      }
    
      handleFormSubmit = (event) => {
        event.preventDefault();
        const color = this.state.color;
        const traits=this.state.traits;
        this.service.post('/questionaire', {color, traits})
        .then( response => {
          console.log(response)
            this.setState({ 
                            color:"",
                            traits: ""
                          });
            this.props.history.push('/user/dashboard')
        })
        .catch( error => console.log(error) )
      }
      
      handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }
      
      handleChangeTraits = (event) =>{
        const {value} = event.target;
        this.setState({traits:[...this.state.traits, value]})
      }

      render() {
        return (
            <MainLayout>
            <div className="questionaire">
              <h3>Questionaire:</h3>
              <form className="questionaire__input" onSubmit={this.handleFormSubmit}>
    
                <label>Personality color:</label>
                <input type="text" name="color" value={this.state.color} onChange={ e => this.handleChange(e)}/>
                
                <label>Occupation:</label>
                <input type="text" name="traits" value={this.state.traits} onChange={ e => this.handleChangeTraits(e)} />
                
                <label>Occupation:</label>
                <input type="text" name="traits" value={this.state.traits} onChange={ e => this.handleChangeTraits(e)} />
                
                <label>Occupation:</label>
                <input type="text" name="traits" value={this.state.traits} onChange={ e => this.handleChangeTraits(e)} />
                
                <label>Occupation:</label>
                <input type="text" name="traits" value={this.state.traits} onChange={ e => this.handleChangeTraits(e)} />
                
                <button className="submitBtn" type="submit">Submit</button>
              </form>
            </div>
            </MainLayout>
            )
        }
}
