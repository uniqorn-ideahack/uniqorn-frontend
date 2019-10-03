import React, { Component } from 'react';
import axios from "axios";
import MainLayout from "../components/layout/MainLayout";

export default class ChooseBuddy extends Component {
    constructor(props){
        super(props);
        this.state={
            users:null
        }
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_API}`,
            withCredentials: true,
            headers: {Authorization:"Bearer "+ this.state.user.token}
          });
        this.service=service;
    }

    componentDidMount(){
        this.service.get('/users')
        .then( response => {
            this.setState({ users: response.data });
        })
        .catch( error => console.log(error) )
    }

    render() {
        let eachUser=null
        if(this.state.users){
            
        }
        return (
            <MainLayout>
                {eachUser}
            </MainLayout>
        )
    }
}
