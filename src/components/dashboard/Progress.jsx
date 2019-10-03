import React, { Component } from 'react';
import './Progress.css';

export default class Progress extends Component {
    render() {
        return (
            <div className="progressBox">
                <h4 className='dashboard__title'>Personal progress</h4>
                <img className='chart' src="/progress.png" alt=""/>
            </div>
        )
    }
}
