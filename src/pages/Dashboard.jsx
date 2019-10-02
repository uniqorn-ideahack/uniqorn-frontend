import React, { Component } from 'react';
import MainLayout from '../components/layout/MainLayout';
import "./Dashboard.css";
import DailyChallenges from '../components/dashboard/DailyChallenges'

export default class Dashboard extends Component {
    render() {
        return (
            <MainLayout>
                <DailyChallenges/>
            </MainLayout>
        )
    }
}
