import React, { Component } from 'react';
import logo from './logo.svg';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import GuestRoute from './components/routes/GuestRouter';
import UserRoute from './components/routes/UserRouter';

import Navigation from './components/Navigation/Navigation';

import LoginPage from './components/layouts/login';
import Signup from './components/layouts/Signup'
import Dashboard from './components/layouts/Dashboard/Dashboard';
import { connect } from 'react-redux';


const App = ({ location, isAuthenticated }) => (
  <div className='ui-container' >
  {isAuthenticated && <Navigation />}
    <Route location={location} path='/' exact component={() => (<Redirect to="/login" />)} />
    <GuestRoute location={location} path='/login' exact component={LoginPage} isAuthenticated={isAuthenticated} />
    <GuestRoute location={location} path='/sign-up' exact component={Signup} isAuthenticated={isAuthenticated} />
    <UserRoute location={location} path='/dashboard' exact component={Dashboard} isAuthenticated={isAuthenticated} />
  </div>
  )

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps ({ user}) {
  return {
    isAuthenticated: user.isAuthenticated
  }
}

export default connect(mapStateToProps)(App);
