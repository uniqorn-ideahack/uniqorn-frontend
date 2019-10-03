import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      user: JSON.parse(localStorage.getItem('user'))
    }
  }


  logoutUser = () =>{
    localStorage.removeItem('user');
    this.setState({ user: null });
    this.props.history.push('/');
  }

  render() {
    if(this.state.user){
      return(
        <>
          <div className="navbar">
            <Link className="navbar__link" to="/">Uniqorn</Link>
            <div className="navbar__right">
                {/* <p className="navbar__link">Hello, {this.state.user.user.name}!</p> */}
                <p className="navbar__link">{(this.state.user.user.points)?(this.state.user.user.points):0} points</p>
                <Link to="/user/dashboard/dailychallenges" className="navbar__link">Hello, {this.state.user.user.name}!</Link>
                <Link to="/user/dashboard/dailychallenges" className="navbar__link">Dashboard</Link>
                <Link to="#" className="navbar__link" onClick={() => this.logoutUser()}>Log out</Link>   
            </div>
          </div> 
        </>
      )
    } else {
      return (
        <>
            <div className="navbar">
                <Link to="/" className="navbar__icon">Uniqorn</Link>
                <div className="navbar__right">
                    <Link to="/signup" className="navbar__link">Sign up</Link>
                    <Link to="/login" className="navbar__link">Log in</Link>
                </div>
                
            </div>  

          {/* </div> */}
        </>
      )
    }
  }
}
