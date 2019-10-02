import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import "./Dashboard.css";
import MainLayout from '../components/layout/MainLayout';
import BuddyList from "./BuddyList";
import DailyChallenges from '../components/dashboard/DailyChallenges'
import Progress from '../components/dashboard/Progress';

export default class Dashboard extends Component {
    render() {
        return (
            <MainLayout>
                <div className='dashboard'>
                    <div>
                        <Link to="/user/dailychallenges">Daily Challenges</Link>
                        <Link to="/user/progress">Progress</Link>
                        <Link to="/user/buddylist">Buddy List</Link>
                    </div>

                    <Route path="/user/dailychallenges" render = {(routeProps)=> <DailyChallenges {...routeProps}/>}/>
                    <Route path="/user/progress" render = {(routeProps)=> <Progress {...routeProps}/>}/>
                    <Route path="/user/buddylist" render = {(routeProps)=> <BuddyList {...routeProps}/>}/>
                </div>
            </MainLayout>
        )
    }
}
