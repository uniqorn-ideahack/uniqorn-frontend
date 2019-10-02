import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./ChallengeCard.css";

export default class ChallengeCard extends Component {
    render() {
        return (
            <Link className='challengeCard' to='/user/challengedetail'>
                <div>
                    <h3>Lesson 3</h3>
                    <p>Learning how to blah blah blah blah</p>
                    <p>Point earnt: 50 <i class="fas fa-coins"></i></p>
                </div>
            </Link>
            
        )
    }
}
