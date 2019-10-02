import React, { Component } from 'react';
import './ChallengeDetail.css';
import axios from 'axios';

export default class ChallengeDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            user: JSON.parse(localStorage.getItem('user')),
        }
    }

    finishChallenge (gardenId){
        axios({
            method:"POST",
            baseURL:`${process.env.REACT_APP_API}/user/${this.state.user.user.id}/dailychallenges/finish`
        })   
        .then(()=>{
            this.props.history.push('/user/dashboard');
        })
        .catch(err=>{
            console.log(err)
        })
      }

    render() {
        return (
            <div>
                <h3>Lesson 3</h3>
                <p>Learning how to blah blah blah blah</p>
                <p>Point earnt: 50 <i class="fas fa-coins"></i></p>
                <button type="submit">Finish</button>
            </div>
        )
    }
}
