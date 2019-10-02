import React, { Component } from 'react';
import MainLayout from '../components/layout/MainLayout';
import "./Dashboard.css";
import DailyChallenges from '../components/dashboard/DailyChallenges'
import Progress from '../components/dashboard/Progress';

export default class Dashboard extends Component {
    render() {
        return (
            <MainLayout>
                <div className='dashboard'>
                    <DailyChallenges/>
                    <Progress/>
                </div>
            </MainLayout>
        )
    }
}
