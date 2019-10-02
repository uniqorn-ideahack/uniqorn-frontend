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
                        <Link to="/user/dashboard/dailychallenges">Daily Challenges</Link>
                        <Link to="/user/dashboard/progress">Progress</Link>
                        <Link to="/user/dashboard/buddylist">Buddy List</Link>
                    </div>

                    <Route path="/user/dashboard/dailychallenges" render = {(routeProps)=> <DailyChallenges {...routeProps}/>}/>
                    <Route path="/user/dashboard/progress" render = {(routeProps)=> <Progress {...routeProps}/>}/>
                    <Route path="/user/dashboard/buddylist" render = {(routeProps)=> <BuddyList {...routeProps}/>}/>
                </div>
            </MainLayout>
        )
    }
}
