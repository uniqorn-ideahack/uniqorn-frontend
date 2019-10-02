import React, { Component } from 'react';
import './Progress.css';

export default class Progress extends Component {
    render() {
        return (
            <div className="progressBox">
                <h1 className='dashboard__title'>Personal progress</h1>
                <p>some graph</p>
            </div>
        )
    }
}
