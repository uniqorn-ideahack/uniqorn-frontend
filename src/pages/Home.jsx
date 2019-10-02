import React, { Component } from 'react';
import "./Home.css";
import MainLayout from "../components/layout/MainLayout";

export default class Home extends Component {
    render() {
        return (
            <MainLayout>
                <h1>Hello Tim!</h1>
                <h2>Your journey to lose weight</h2>
                <progress max="100" value="40"></progress>
            </MainLayout>
        )
    }
}
