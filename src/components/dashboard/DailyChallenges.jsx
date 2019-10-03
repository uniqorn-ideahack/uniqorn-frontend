import React, { Component } from 'react';
import "./DailyChallenges.css";
import ChallengeCard from "./ChallengeCard";
import axios from 'axios';

export default class CurrentChallenges extends Component {
    constructor(props){
        super(props);
        this.state={
            user: JSON.parse(localStorage.getItem('user')),
            challenges:null
        };
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_API}`,
            withCredentials: true,
            headers: {Authorization:"Bearer "+ this.state.user.token}
          });
        this.service=service;
    }
    componentDidMount(){
        this.service.get('/dailychallenges')
        .then( response => {
          console.log(response)
            this.setState({ challenges: response.data });
        })
        .catch( error => console.log(error) )
    }

    render() {
        let weekdays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let d= new Date();
        let eachChallenge=null;
        if(this.state.challenges){
            let allChallenges=this.state.challenges;
            eachChallenge= allChallenges.map((challenge)=>{  
                return(
                    <ChallengeCard challenge={challenge}/>
                    )
            })
        }

        return (
            <div className="dailychallenges">
                <h4>Daily Challenges</h4>
                <p>{weekdays[d.getDay()]}, {d.getDate()} {months[d.getMonth()]} {d.getFullYear()}</p>
                <div className="dailychallenges__each">
                    {eachChallenge}
                </div>
            </div>
        )
    }
}
