import React, { Component } from 'react';
import "./LeaderBoard.css";

export default class LeaderBoard extends Component {
    constructor(props){
        super(props);
        this.state={
            user: JSON.parse(localStorage.getItem('user'))
        }
    }
    render() {
        return (
            <div className="leaderboard">
                <h4>Leader Board</h4>
                <div className="leaderboard__one">
                    <i className="fas fa-trophy leaderboard__one__trophy fa-5x"></i>
                    <p>first place</p>
                    <p>Points: pt</p>
                </div> 

                <div className='leaderboard__second'>
                    <div className="leaderboard__secondcircle">
                        <i className="fas fa-trophy leaderboard__two__trophy fa-3x"></i>
                        <p>second place</p>
                        <p>Points: pt</p>
                    </div>
                    <div className="leaderboard__secondcircle">
                        <i className="fas fa-trophy leaderboard__three__trophy fa-3x"></i>
                        <p>third place</p>
                        <p>Points: pt</p>
                    </div>
                </div>             

                <div className='leaderboard__next'>
                    <div className='leaderboard__nextitem'>
                        <i className="fas fa-circle"></i>
                        <p>next one</p>
                        <p>Points: pt</p>                      
                    </div>
                    <div className='leaderboard__nextitem'>
                        <i className="fas fa-circle"></i>
                        <p>next one</p>
                        <p>Points: pt</p>                      
                    </div>
                    <div className='leaderboard__nextitem'>
                        <i className="fas fa-circle"></i>
                        <p>next one</p>
                        <p>Points: pt</p>                      
                    </div>
                </div>                
                                
            </div>
        )
    }
}
