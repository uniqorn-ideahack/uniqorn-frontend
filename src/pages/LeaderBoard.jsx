import React, { Component } from 'react';
import "./LeaderBoard.css";
import axios from 'axios';

export default class LeaderBoard extends Component {
    constructor(props){
        super(props);
        this.state={
            user: JSON.parse(localStorage.getItem('user'))
        }
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_API}`,
            withCredentials: true,
            headers: {Authorization:"Bearer "+ this.state.user.token}
          });
        this.service=service;
    }

    componentDidMount(){
        this.service.get('/users')
        .then( response => {
            let allUsers=response.data;
            allUsers.sort((a, b) => (a.points > b.points) ? -1 : 1)
            console.log(allUsers)
            this.setState({ users: allUsers });
        })
        .catch( error => console.log(error) )
    }

    render() {
        if(this.state.users){
        let leaders=this.state.users;
        console.log(leaders)

        let eachleader=leaders.map(leader=>{
            return(
                    <div className='leaderboard__nextitem'>
                        <i className="fas fa-circle"></i>
                        <p>{leader.name} {leader.surname}</p>
                        <p>Points: {leader.points} pt</p>                 
                    </div>
            )
        })

        eachleader.splice(0,3);
        return (
            <div className="leaderboard">
                <h4>Leader Board</h4>
                <div className="leaderboard__one">
                    <i className="fas fa-trophy leaderboard__one__trophy fa-5x"></i>
                    <p>{leaders[0].name} {leaders[0].surname}</p>
                    <p>Points: {leaders[0].points} pt</p>
                </div> 

                <div className='leaderboard__second'>
                    <div className="leaderboard__secondcircle">
                        <i className="fas fa-trophy leaderboard__two__trophy fa-3x"></i>
                        <p>{leaders[1].name} {leaders[1].surname}</p>
                        <p>Points: {leaders[1].points} pt</p>
                    </div>
                    <div className="leaderboard__secondcircle">
                        <i className="fas fa-trophy leaderboard__three__trophy fa-3x"></i>
                        <p>{leaders[2].name} {leaders[2].surname}</p>
                        <p>Points: {leaders[2].points} pt</p>
                    </div>
                </div>             

                <div className='leaderboard__next'>
                    {eachleader}
                </div>                
                                
            </div>
        )} else {
            return <>
            </>
        }
    }
}
