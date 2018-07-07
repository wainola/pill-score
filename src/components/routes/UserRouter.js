import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <div>
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}
    />
  </div>
);

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps({ user }) {
  return {
    isAuthenticated: user.isAuthenticated
  };
}

export default connect(mapStateToProps)(UserRoute);


