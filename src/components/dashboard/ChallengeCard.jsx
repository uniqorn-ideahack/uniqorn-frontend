import React, { Component } from 'react';
import "./ChallengeCard.css";
import { withRouter } from 'react-router'; 

 class ChallengeCard extends Component {
    constructor(props){
        super(props);
        this.state={
            user: JSON.parse(localStorage.getItem('user'))
                };
    }

    render() {
        return (
                <div className="challengeCard">
                    <h3>{this.props.challenge.title}</h3>
                    <p>{this.props.challenge.description}</p>
                    <p>Point earnt: {this.props.challenge.points} pt</p>
                    <button type="submit" onClick={()=>{this.props.finish(this.props.challenge.id)}}>Finish</button>
                </div>
            
        )
    }
}

export default withRouter(ChallengeCard)