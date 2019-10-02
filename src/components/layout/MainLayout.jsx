import React, { Component } from 'react'
import "./MainLayout.css";
import Nav from "../navbar/Nav";
import Footer from "../footer/Footer";

export default class MainLayout extends Component {
    render() {
        return (
            <div className="mainlayout">
                <Nav {...this.props} />
                <div className="wrapper">
                    {this.props.children}
                </div>                
                <Footer />
            </div>
        )
    }
}
