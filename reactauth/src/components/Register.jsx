import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {

    state = {
        name : '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    // Register form submit
    formSubmit = e => {
        e.preventDefault();

        const data = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            password_confirmation : this.state.password_confirmation,
        }

        axios.post('/register', data)
        .then( res => {
            localStorage.setItem('token', res.data.token);
            this.setState({
                loggedIn: true
            });

            this.props.setUser(res.data.user);
        })
        .catch( error => {
            this.setState({ message: error.response.data.message });
        })
    }

  render() {

    // After Register Redirect to Profile Page
    if(this.state.loggedIn){
        return <Navigate to="/profile" />
    }

    let error = "";

    if(this.state.message){
      error = (
        <div>
          <div className='alert alert-danger' role='alert'>
            { this.state.message }
          </div>
        </div>
      )
    }

    return (
      <>
        <div className="register my-5">
            <div className="jumbotron col-lg-4 offset-lg-4">
                <h2 className='text-center'>Register Account</h2>
                <form onSubmit={ this.formSubmit }>
                    { error }
                    <div className="form-group">
                        <label htmlFor="username">User Name</label>
                        <input type="text" name='name' id='username' className='form-control' required onChange={ e => this.setState({ name: e.target.value }) } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name='email' id='email' className='form-control' required onChange={ e => this.setState({ email: e.target.value }) } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' className='form-control' required onChange={ e => this.setState({ password: e.target.value }) } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password_confirmation">Confirm Password</label>
                        <input type="password" name='password_confirmation' id='password_confirmation' className='form-control' required onChange={ e => this.setState({ password_confirmation: e.target.value }) } />
                    </div>
                    <div className="form-group">
                        <input type="submit" className='btn btn-primary btn-rounded form-control' value="Register" />
                    </div>
                    <div className="form-group">
                        Forget Your Password <Link to="/forget">Click Here</Link><br />
                        Have an Account <Link to="/forget">Click Here</Link>
                    </div>
                </form>
            </div>
        </div>
      </>

    )
  }
}

export default Register;