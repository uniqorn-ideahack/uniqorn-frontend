import React, { Component } from 'react';
import "./BuddyList.css";
import axios from 'axios';

export default class BuddyList extends Component {
    constructor(props){
        super(props);
        this.state={
            user: JSON.parse(localStorage.getItem('user')),
            buddies:null
        }
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_API}`,
            withCredentials: true,
            headers: {Authorization:"Bearer "+ this.state.user.token}
          });
        this.service=service;
    }

    componentDidMount(){
        this.service.get('/buddies')
        .then(response=>{
            console.log(response.data)
            this.setState({buddies: response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {
        return (
            <div className="buddylist">
                <h4>Your buddy</h4>
                
            </div>
        )
    }
}
