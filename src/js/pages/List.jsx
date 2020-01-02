import React from 'react';
import logo from '../../assets/images/header-logo-testio.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions/actions.js';
import '../../css/List.css';
import SvgIcons from '../components/SvgIcons.jsx';

function sortCountries(a, b) {
  if (a.distance > b.distance) return 1;
  else if (a.distance < b.distance) return -1;
  else {
    if (a.name > b.name) return 1;
    else if (a.name < b.name) return -1;
    else return 0;
  }
}

class List extends React.Component {

  componentDidMount() {
    fetch('http://playground.tesonet.lt/v1/servers', {
      method: 'get',
      headers: {
        'Content-Type':'application/json;charset=utf-8',
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem('userToken')
      }
    })
      .then(res => res.json())
      .then(res => this.props.attachCountries(res.sort(sortCountries)))
      .catch(err => console.log(err))
  }

  logout = () => {
    const { updateUserState, history } = this.props;
    localStorage.removeItem('userToken');
    updateUserState(false);
    history.push('/login');
  }

  render() {
    const { countries } = this.props;
    return (
      <div>
        <div className="list-header">
          <img src={logo}/>
          <a className="list-header-logout" onClick={this.logout}>
            <SvgIcons iconName="logout"/>
            <span>Logout</span>
          </a>
        </div>
        <div className="list-block">
          <span>Server</span>
          <span>Distance</span>
        </div>
        <div className="list-countries">
          {countries.map((country, index) => (
            <div key={index} className="list-countries-item">
              <span>{country.name}</span>
              <span>{country.distance} km</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

List.propTypes = {
  countries: PropTypes.array.isRequired,
  attachCountries: PropTypes.func.isRequired,
  updateUserState: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  countries: state.countries
});

export default connect(mapStateToProps, { 
  attachCountries: actions.attachCountries,
  updateUserState: actions.updateUserState
})(List);