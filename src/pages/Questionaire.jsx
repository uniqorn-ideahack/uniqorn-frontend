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
            important:"",
            stress:"",
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
        const {occupation, important,stress, why}= this.state;
        const traits=[];
        traits.push(occupation);
        traits.push(important);
        traits.push(stress);
        traits.push(why);

        this.service.post('/traits', {traits})
        .then( response => {
            this.setState({ 
                            occupation: "",
                            important:"",
                            stress:"",
                            why:""
                          });
            this.props.history.push('/user/choosebuddy')
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
                <select name="occupation" onChange={ e => this.handleChange(e)}>
                  <option value ="students">Students</option>
                  <option value ="employed">Employed</option>
                  <option value ="self-employed">Self-employed</option>
                  <option value ="umemployed">Unemployed</option>
                </select>

                <label>What is most important to you?</label>
                <select name="important" onChange={ e => this.handleChange(e)}>
                  <option value ="studying/working">Studying/ Working</option>
                  <option value ="friends">Spending time with friends and family</option>
                  <option value ="partying">Partying</option>
                  <option value ="self">Self development</option>
                </select>

                <label>Do you feel often stressed out?</label>
                <select name="stress" onChange={ e => this.handleChange(e)}>
                  <option value ="stressed">Yes</option>
                  <option value ="not stressed">No</option>
                </select>
                  {/* <input type="text" name="occupation" value={this.state.occupation} onChange={ e => this.handleChange(e)} /> */}
                  
                  <label>Why you wanna change:</label>
                  <input type="text" name="why" value={this.state.why} onChange={ e => this.handleChange(e)} />

                  <button className="submitBtn" type="submit">Submit</button>
                </form>
              </div>
            </MainLayout>
            )
        }
}
