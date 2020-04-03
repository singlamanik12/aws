import React, { Component } from 'react';
import Nav from "./nav"
import { Link } from 'react-router-dom';
import Back from "./background";
import "./home.css"

class Home extends Component{
    render()
    {
        return<>
        
        <div className="background12">
          <Nav></Nav>
        <div className="back">
            <span className="title1">Express-Food</span>
            <span className="title2">For those who love Food</span>
            <span className="title2">For Searching and Finding restaurant</span>
            <Link to='/signup'>
                <button className="register">
                    Sign Up!
        </button></Link>
        </div>
        </div>
        <Back></Back>
        <div></div>
          </>
    }
}
export default Home;

