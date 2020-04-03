import React, { Component } from 'react';
import {Route} from "react-router-dom";
import App from "./App";
import Login from './login';
import Signup from './signup';
import Home from './home';
import Fetch from "./fetch";
import Practice from './practice';
export default class Main extends Component
{
    render()
    {
        return <>
        <Route exact path="/" component={Home}></Route>
         <Route exact path="/home" component={Practice}></Route> 
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route path="/fetch" component={Fetch}></Route>
        </>
    }
} 