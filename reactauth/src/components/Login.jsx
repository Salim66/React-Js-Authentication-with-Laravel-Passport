import React, { Component } from 'react';
import { Link, Navigate }  from 'react-router-dom';
import axios from 'axios';

class Login extends Component {

    state = {
        email: '',
        password: '',
        message: ''
    }

    formSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/login', data)
        .then( res => {
            localStorage.setItem('token', res.data.token);
            this.setState({
                loggedIn: true
            });

            // props login user data
            this.props.setUser(res.data.user);
        })
        .catch( error => {
            this.setState({ message: error.response.data.message });
        })

    }

  render() {

    // After login redirect to profile page
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

    if(localStorage.getItem('token')){
        return <Navigate to="/profile" />
    }

    return (
      <>
        <div className="login my-5">
            <div className="jumbotron col-lg-4 offset-lg-4">
                <h2 className='text-center'>Login Account</h2>
                <form onSubmit={ this.formSubmit }>
                    { error }
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='email' className='form-control' required onChange={ e => this.setState({ email: e.target.value }) } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' className='form-control' required onChange={ e => this.setState({ password: e.target.value }) } />
                    </div>
                    <div className="form-group">
                        <input type="submit" className='btn btn-primary btn-rounded form-control' value="Login" />
                    </div>
                    <div className="form-group">
                        Forget Your Password <Link to="/forget">Click Here</Link>
                    </div>
                </form>
            </div>
        </div>
      </>
    )
  }
}

export default Login;