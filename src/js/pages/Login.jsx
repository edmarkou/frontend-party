import React from 'react';
import testio from '../../assets/images/testio-logo.png';
import loader from '../../assets/images/loader.svg';
import SvgIcons from '../components/SvgIcons.jsx';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions/actions.js';
import '../../css/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: {
        type: '',
        message: ''
      }
    }
  }

  updateInput = e => this.setState({[e.target.id]: e.target.value, error: { type: '',  message: '' }});

  isValid = () => {
    const { username, password } = this.state;
    if (!username.length) {
      this.setState({error: { message: "Username is required.", type: 'username' }})
      return false;
    } else if (!password.length) { 
      this.setState({error: { message: "Password is required.", type: 'password' }});
      return false;
    } else return true;
  }

  login = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { updateUserState, history } = this.props;
    if (this.isValid()) {
      this.setState({ loading: true });
      fetch("http://playground.tesonet.lt/v1/tokens", {
        method: 'post',
        headers: {
          'Content-Type':'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ username, password })
      })
        .then(res => res.json())
        .then(res => {
          if (res.token) {
            localStorage.setItem("userToken", res.token);
            this.setState({loading: false});
            updateUserState(true);
            history.push("/");
          }
          else 
            this.setState({
              loading: false,
              password: '', 
              username: '', 
              error: { message: "Incorrect password or username.", type: 'all' }
            });
        })
        .catch(err => {
          this.setState({
            loading: false,
            password: '', 
            username: '', 
            error: { message: "Incorrect password or username.", type: 'all' }
          });
        })
    }
  }

  hasError = type => {
    const { error } = this.state;
    if (error.type === 'all' || error.type === type) return true;
    else return false;
  }

  render() {
    const { username, password, error, loading } = this.state;
    return (
      <div className="login-container">
        <img src={testio} className="login-logo"/>
        <form className="login-form" onSubmit={this.login}>
          <div className={this.hasError('username') ? "login-input-container login-input-container--error" : "login-input-container"}>
            <SvgIcons iconName="username"/>
            <input
              placeholder={this.hasError('username') ? error.message : "Username"}
              id="username"
              className={this.hasError('username') ? "login-input login-input--error" : "login-input"}
              value={username}
              onChange={this.updateInput}
            />
          </div>
          <div className={this.hasError('password') ? "login-input-container login-input-container--error" : "login-input-container"}>
            <SvgIcons iconName="password"/>
            <input
              type="password"
              placeholder={this.hasError('password') ? error.message : "Password"}
              id="password"
              className={this.hasError('password') ? "login-input login-input--error" : "login-input"}
              value={password}
              onChange={this.updateInput}
            />
          </div>
          {loading ?
          <a className="login-button">
            <img src={loader}/> 
          </a>
          :
          <input type="submit" className="login-button" value="Log In" onClick={this.login}/>}
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  updateUserState: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps, { updateUserState: actions.updateUserState })(Login);