import React, { Component } from 'react';
import axios from "axios";
import MainLayout from "../components/layout/MainLayout";
import { all } from 'q';

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

    addBuddy (userId){
        this.service.post(`/user/buddy/${userId}`)
        .then(response=>{
            this.props.history.push("/user/dashboard/buddy")
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        let eachUser=null
        if(this.state.users){
            let allUsers= this.state.users;
            eachUser=allUsers.map((user)=>{
                return (
                    <div>
                        <p>Name: </p>
                        <p>Point: </p>
                        <button onClick={this.addBuddy(user.id)} type="submit">Add buddy</button>
                    </div>
                )
            })
        }
        
        return (
            <MainLayout>
                {eachUser}
            </MainLayout>
        )
    }
}
