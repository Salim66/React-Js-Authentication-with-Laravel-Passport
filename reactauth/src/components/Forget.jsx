import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

class Forget extends Component {

  state = {
    email: '',
    message: ''
  }

  formSubmit = e => {
    e.preventDefault();

    const data = {
      email : this.state.email
    }

    axios.post('/forget-password', data)
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
        <div className="login my-5">
            <div className="jumbotron col-lg-4 offset-lg-4">
                <h2 className='text-center'>Forget Password</h2>
                <form onSubmit={ this.formSubmit } id="forget_form">
                   { error }
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name='email' id='email' className='form-control' required onChange={ e => this.setState({ email: e.target.value }) } />
                    </div>
                    <div className="form-group">
                        <input type="submit" className='btn btn-primary btn-rounded form-control' value="Forget" />
                    </div>
                    <div className="form-group">
                        Have an Account <Link to="/login">Click Here</Link><br/>
                        Create a new Account <Link to="/register">Click Here</Link>
                    </div>
                </form>
            </div>
        </div>
      </>
    )
  }
}

export default Forget;