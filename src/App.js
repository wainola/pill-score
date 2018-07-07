import React, { Component } from 'react';
import logo from './logo.svg';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import GuestRoute from './components/routes/GuestRouter';
import UserRoute from './components/routes/UserRouter';

import Navigation from './components/Navigation/Navigation';
import Navbar from './components/Navigation/Navbar'

import LoginPage from './components/layouts/login';
import Signup from './components/layouts/Signup'
import Dashboard from './components/layouts/Dashboard/Dashboard';


const App = ({ location, isAuthenticated }) => {
  const visible = false
  return(
    <div className='ui-container' >
    {/* {isAuthenticated && <Navigation />} */}
      <Sidebar.Pushable style={{ minHeight: window.innerHeight }} >
        <Sidebar as={Menu} animtation='push' visible={visible} width='wide' icon='labeled' vertical inverted>
          <Menu.Item header>
            <p>
              <Icon name='user' />
                Drug Addict 69
            </p>
          </Menu.Item>
          <Menu.Item as={Link} to='/dashboard' name='dasboard'>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Navbar visible={visible}/>
          <Route location={location} path='/' exact component={() => (<Redirect to="/login" />)} />
          <GuestRoute location={location} path='/login' exact component={LoginPage} isAuthenticated={isAuthenticated} />
          <GuestRoute location={location} path='/signup' exact component={Signup} isAuthenticated={isAuthenticated} />
          <UserRoute location={location} path='/dashboard' exact component={Dashboard} isAuthenticated={isAuthenticated} />
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    </div>
  )
}

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