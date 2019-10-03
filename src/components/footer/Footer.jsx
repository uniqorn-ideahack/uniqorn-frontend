import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__box">
          <p>GedankenTanken</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
        <div className="footer__rowBox">
          <p>Follow us on</p>
          <p><i className="fab fa-facebook-square"></i></p>
          <p><i className="fab fa-twitter-square"></i></p>
          <p><i className="fab fa-instagram"></i></p>
        </div>
        <div className="footer__box">
          <p>Contact</p>
          <p>Further information</p>
        </div>
      </div>
    )
  }
}
