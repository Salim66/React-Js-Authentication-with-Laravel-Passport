import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

class Forget extends Component {

  state = {
    token : '',
    email: '',
    password: '',
    password_confirmation: ''
}

// Register form submit
formSubmit = e => {
    e.preventDefault();

    const data = {
        token : this.state.token,
        email : this.state.email,
        password : this.state.password,
        password_confirmation : this.state.password_confirmation,
    }

    axios.post('/reset-password', data)
    .then( res => {
      this.setState({ message: res.data.message });
      document.getElementById("forget_form").reset();
    })
    .catch( error => {
        this.setState({ message: error.response.data.message });
    })
    
  }

  render() {

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
                        <label htmlFor="pincode">Pin Code</label>
                        <input type="text" name='token' id='pincode' className='form-control' required onChange={ e => this.setState({ token: e.target.value }) } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name='email' id='email' className='form-control' required onChange={ e => this.setState({ email: e.target.value }) } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">New Password</label>
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

export default Forget;