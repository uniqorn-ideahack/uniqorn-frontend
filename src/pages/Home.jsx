import React, {Component} from 'react';
import "./Home.css";
import MainLayout from "../components/layout/MainLayout";

export default class Home extends Component {
    render() {
        return (
            <MainLayout>
                <main>
                    <h1>Hello Tim!</h1>
                    <h3>Your journey to lose weight: Day 7 of 30</h3>
                    <progress max="100" value="40"></progress>
                    <h2>Next step</h2>

                </main>
            </MainLayout>
        )
    }
}
