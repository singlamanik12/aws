import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword(password) {
        this.setState({
            password: password.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const users = {
            email: (this.state.email).toLowerCase(),
            password: this.state.password
        }
        axios.post('http://localhost:5000/login', users)
            .then((res) => {
                      window.location="/fetch";  
                })
            .catch((error) => {
                alert(error.response.data);
            })
    }
    render() {
        return <div className="container-fluid background">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <br></br>
                    <Link className="btn btn-danger" to="/" >Home</Link>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <form className="log" onSubmit={this.onSubmit}>
                        <h1 className="h1">Login Here</h1>
                        {/* <img id="img" src={ss} alt="logo" className='img-fluid custom' /> */}
                        <div className="form-group">
                            <label className="label">Email</label>
                            <input type="email" className="form-control" placeholder="Enter Your Email" value={this.state.email} onChange={this.onChangeEmail} required></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter Your Password" value={this.state.password} onChange={this.onChangePassword} required></input>
                        </div>
                        <div className="checkbox">
                            <Link to="forgot"><p className="p">Forgot your password?</p></Link>
                        </div>
                        <button type="submit" className="btn btn-success btn-block button" required>Login</button>
                        <Link to="Signup" ><p className="p">Create New Account ? Click Here!</p></Link>
                    </form>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12"></div>
            </div>
        </div>
    }
}
export default Login;
