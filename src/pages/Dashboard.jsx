import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import "./Dashboard.css";
import MainLayout from '../components/layout/MainLayout';
import BuddyList from "./BuddyList";
import DailyChallenges from '../components/dashboard/DailyChallenges';
import LeaderBoard from './LeaderBoard';
import Progress from '../components/dashboard/Progress';

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            underlined: "none",
            user:""
        }
        this.toggleUnderlined=this.toggleUnderlined.bind(this);
        this.setStatefunc=this.setStatefunc.bind(this);
    }

    toggleUnderlined(){
        this.state.underlined === "none"?
        this.setState({underlined:"underline"})
        :
        this.setState({underlined:"none"})
    }

    setStatefunc(){
        this.setState({user:null})
    }

    render() {
        return (
            <MainLayout>
                <div className='dashboard'>
                    <div className='dashboard__tab'>
                        <Link to="/user/dashboard/dailychallenges" 
                                // style={{textDecoration: this.state.underlined}} 
                                className="dashboard__tabLink">Daily Challenges</Link>
                        <Link to="/user/dashboard/progress" 
                                // style={{textDecoration: this.state.underlined}} 
                                className="dashboard__tabLink">Progress</Link>                    
                        <Link to="/user/dashboard/buddy" 
                                // style={{textDecoration: this.state.underlined}} 
                                className="dashboard__tabLink">Buddy</Link>
                        <Link to="/user/dashboard/leaderboard" 
                                // style={{textDecoration: this.state.underlined}} 
                                className="dashboard__tabLink">Leader Board</Link>
                    </div>

                    <Route path="/user/dashboard/dailychallenges" render = {(routeProps)=> <DailyChallenges setstate={this.setStatefunc} {...routeProps}/>}/>
                    <Route path="/user/dashboard/progress" render = {(routeProps)=> <Progress {...routeProps}/>}/>
                    <Route path="/user/dashboard/buddy" render = {(routeProps)=> <BuddyList {...routeProps}/>}/>
                    <Route path="/user/dashboard/leaderboard" render = {(routeProps)=> <LeaderBoard {...routeProps}/>}/>

                </div>
            </MainLayout>
        )
    }
}
