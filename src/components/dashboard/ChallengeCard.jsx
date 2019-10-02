import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./ChallengeCard.css";

export default class ChallengeCard extends Component {
    render() {
        return (
            <Link className='challengeCard' to='/user/dashboard/challengedetail'>
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <p>Point earnt: {this.props.points} <i class="fas fa-coins"></i></p>
                </div>
            </Link>
            
        )
    }
}
