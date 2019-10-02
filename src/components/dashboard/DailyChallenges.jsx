import React, { Component } from 'react';
import "./DailyChallenges.css";
import ChallengeCard from "./ChallengeCard";


export default class CurrentChallenges extends Component {
    render() {
        let weekdays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let d= new Date();
        return (
            <>
                <h1>Daily Challenges</h1>
                <p>{weekdays[d.getDay()]}, {d.getDate()} {months[d.getMonth()]} {d.getFullYear()}</p>
                <div className="dailyChallenges">
                    <ChallengeCard/>
                    <ChallengeCard/>
                    <ChallengeCard/>
                </div>
                <div>
                    
                </div>
            </>
        )
    }
}
