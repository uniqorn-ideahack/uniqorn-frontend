import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import "./Dashboard.css";
import MainLayout from '../components/layout/MainLayout';
import BuddyList from "./BuddyList";
import DailyChallenges from '../components/dashboard/DailyChallenges';
import LeaderBoard from './LeaderBoard';

export default class Dashboard extends Component {
    render() {
        return (
            <MainLayout>
                <div className='dashboard'>
                    <div className='dashboard__tab'>
                        <Link to="/user/dashboard/dailychallenges">Daily Challenges</Link>
                        <Link to="/user/dashboard/buddylist">Buddy List</Link>
                        <Link to="/user/dashboard/leaderboard">Leader Board</Link>
                    </div>

                    <Route path="/user/dashboard/dailychallenges" render = {(routeProps)=> <DailyChallenges {...routeProps}/>}/>
                    <Route path="/user/dashboard/buddylist" render = {(routeProps)=> <BuddyList {...routeProps}/>}/>
                    <Route path="/user/dashboard/leaderboard" render = {(routeProps)=> <LeaderBoard {...routeProps}/>}/>

                </div>
            </MainLayout>
        )
    }
}
