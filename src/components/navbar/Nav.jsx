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
            <Link to="/">GedankenTanken</Link>
            <div className="navbar__right">
                <Link to="/user/dashboard" className="navbar__username" >Hello, {this.state.user.user.name}!</Link>
                <Link to="/user/dashboard" className="navbar__link">Dashboard</Link>
                <Link to="#" className="navbar__link" onClick={() => this.logoutUser()}>Log out</Link>   
                <Link to="/about" className="navbar__link">About</Link>       
            </div>
          </div> 
        </>
      )
    } else {
      return (
        <>
            <div className="navbar">
                <Link to="/" className="navbar__icon">GEDANKENTanken</Link>
                <div className="navbar__right">
                    <Link to="/signup" className="navbar__link">SignUp</Link>
                    <Link to="/login" className="navbar__link">Login</Link>
                    <Link to="/about" className="navbar__link">About</Link>
                </div>
                
            </div>  

          {/* </div> */}
        </>
      )
    }
  }
}
