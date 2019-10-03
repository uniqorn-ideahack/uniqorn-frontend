import React, { Component } from 'react';
import "./ChallengeCard.css";
import axios from 'axios';

export default class ChallengeCard extends Component {
    constructor(props){
        super(props);
        this.state={
            user: JSON.parse(localStorage.getItem('user'))
                };
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_API}`,
            withCredentials: true,
            headers: {Authorization:"Bearer "+ this.state.user.token}
          });
        this.service=service;
    }

    finishChallenge (challengeId){
        this.service.post(`/dailychallenges/${challengeId}`)
        .then( response => {
            this.props.history.push('/user/dashboard')
        })
        .catch( error => console.log(error) )
      }

    render() {
        return (
                <div className="challengeCard">
                    <h3>{this.props.challenge.title}</h3>
                    <p>{this.props.challenge.description}</p>
                    <p>Point earnt: {this.props.challenge.points}pt <i className="fas fa-coins"></i></p>
                    <button type="submit" onClick={()=>{this.finishChallenge(this.props.challenge.id)}}>Finish</button>
                </div>
            
        )
    }
}
