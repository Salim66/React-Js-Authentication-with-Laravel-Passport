import React, { Component } from 'react';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import Forget from '../components/Forget';
import Reset from '../components/Reset';
import axios from 'axios';

class Header extends Component {

  state = {
    user: {}
  }

  componentDidMount(){
    axios.get('/user')
    .then( res => {
      this.setUser(res.data)
    })
    .catch( error => {
      console.log(error);
    })
  };

  setUser = (user) => {
    this.setState({ user: user })
  }

  render() {
    return (
      <>
        <Nav user={ this.state.user } setUser={ this.setUser } />
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/login' element={ <Login user={ this.state.user } setUser={ this.setUser } /> } />
            <Route path='/register' element={ <Register user={ this.state.user } setUser={ this.setUser } /> } />
            <Route path='/profile' element={ <Profile user={ this.state.user } /> } />
            <Route path='/forget' element={ <Forget /> } />
            <Route path='/reset/:id' element={ <Reset /> } />
        </Routes>
      </>
    )
  }
}

export default Header;