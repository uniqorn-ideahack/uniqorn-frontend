import React, { Component } from 'react';
import "./DailyChallenges.css";
import "./ChallengeCard.css";
import axios from 'axios';
import { withRouter } from 'react-router'; 

class CurrentChallenges extends Component {
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
            if(response.data.length>0){
                this.setState({ challenges: response.data });
            } else {
                this.setState({challenges:null})
            }
        })
        .catch( error => console.log(error) )
    }

    finishChallenge (challengeId){
        this.service.post(`/dailychallenges/${challengeId}`)
        .then( response => {
            let updateUser={...this.state.user}
            updateUser.user.points = response.data.points
            localStorage.setItem('user', JSON.stringify(updateUser));
            let challenge=[...this.state.challenges].filter(ch => ch.id!==challengeId)
            console.log(challenge)
            this.setState({user:updateUser, challenges: challenge})
            debugger
            this.props.setstate();
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
                <div className="challengeCard">
                    <h3>{challenge.title}</h3>
                    <p>{challenge.description}</p>
                    <p>Point earnt: {challenge.points} pt</p>
                    <button type="submit" onClick={()=>{this.finishChallenge(challenge.id)}}>Finish</button>
                </div>
                )
            })
        }

        return (
            <>
            {(this.state.challenges)?
                <div className="dailychallenges">
                <h4 className='dashboard__title'> Daily Challenges</h4>
                {(eachChallenge && this.state.challenges)?
                <>               
                    <p>{weekdays[d.getDay()]}, {d.getDate()} {months[d.getMonth()]} {d.getFullYear()}</p>
                    <div className="dailychallenges__each">
                        {eachChallenge}
                    </div>
                </>
                :
                <div>
                    <p>You have finished all daily challenges</p>
                </div>
                }
                
            </div>
            :
            <>
                <h4>Daily Challenges</h4>
                <p>You have finished all daily challenges</p>
            </>
            }
            </>
                
        )
    }
}


export default withRouter(CurrentChallenges)
