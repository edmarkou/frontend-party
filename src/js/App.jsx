import React from 'react';
import Login from './pages/Login.jsx';
import List from './pages/List.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <Router>
        <Switch>
          <Route path="/login" render={props => <Login {...props}/>}/>
          <ProtectedRoute path="/" component={List} loggedIn={loggedIn}/>
        </Switch>
      </Router>
    )
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(App);