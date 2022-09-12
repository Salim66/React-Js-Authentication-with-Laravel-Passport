import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Profile extends Component {
  render() {

    let name, email;
    if(this.props.user){
      name = this.props.user.name;
      email = this.props.user.email;
    }

    if(!localStorage.getItem('token')){
      return <Navigate to="/login" />
    }

    return (
      <>
        <div className="login my-5">
            <div className="jumbotron col-lg-4 offset-lg-4">
                <h2 className='text-center'>User Profile</h2>
                <ul className="list-group">
                  <li className="list-group-item">Name: { name }</li>
                  <li className="list-group-item">Email: { email }</li>
                </ul>
            </div>
        </div>
      </>

    )
  }
}

export default Profile;