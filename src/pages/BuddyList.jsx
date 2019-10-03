import React, { Component } from "react";
import "./BuddyList.css";
import axios from "axios";

export default class BuddyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("user")),
      buddies: null
    };
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API}`,
      withCredentials: true,
      headers: { Authorization: "Bearer " + this.state.user.token }
    });
    this.service = service;
  }

  componentDidMount() {
    this.service
      .get("/buddies")
      .then(response => {
        let buddies = response.data.map(buddy => {
          return [buddy.user_one, buddy.user_two].filter(
            id => id !== this.state.user.user.id
          )[0];
        });
        Promise.all(
          buddies.map(id =>
            this.service.get("/user/" + id).then(res => res.data)
          )
        ).then(buds => {
          buddies = buds;
          console.log(buddies);
          this.setState({ buddies: buddies });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
      if(this.state.buddies){
          let buds= this.state.buddies;
      let eachBud=null;
      eachBud= buds.map((bud)=>{
          return(
              <div className='eachUser__box'>
              <p>Name: {bud.name}</p>
              <p>Point: {bud.points} pt</p>
              </div>
          )
      })
    return (
      <div className="buddylist">
        <h4>Your buddy</h4>
        {eachBud}
      </div>
    );
      } else {
          return <>
          </>
      }
      
  }
}
