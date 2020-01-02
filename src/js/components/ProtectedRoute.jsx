import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, component, path }) => (
  <Route path={path} render={props => loggedIn ? React.createElement(component, props) : <Redirect from={path} to="/login" />}/>
);

ProtectedRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  component: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
};

export default ProtectedRoute;