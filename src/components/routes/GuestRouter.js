import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const GuestRouter = ({ isAuthenticated, component: Component, ...res }) => (
  <Route
    {...res}
    render={
      props =>
      (
          !isAuthenticated ?
            <Component {...props} />
            :
            <Redirect to="/dashboard" />
      )
      }
  />
);

GuestRouter.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps ({ user }) {
  return {
    isAuthenticated: user.isAuthenticated
  }
};

export default connect(mapStateToProps)(GuestRouter);
