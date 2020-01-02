import React from 'react';
import PropTypes from 'prop-types';

export default class SvgIcons extends React.PureComponent {
  render() {
    const { iconName } = this.props;
    switch (iconName) {
      case "username": 
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
            <g><g>
              <path d="M11 4v1c0 2.206-1.794 4-4 4S3 7.206 3 5V4c0-2.206 1.794-4 4-4s4 1.794 4 4zm3 9v3H0v-3c0-1.689 1.203-3 2.964-3.574A5.969 5.969 0 0 0 7 11c1.555 0 2.969-.6 4.036-1.574C12.797 10 14 11.311 14 13z"/>
            </g></g>
          </svg>
        )
      case "password":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18">
            <g><g>
              <path d="M11 4v3h2c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h2V4c0-2.2 1.8-4 4-4s4 1.8 4 4zM9 4c0-1.1-.9-2-2-2s-2 .9-2 2v3h4zm-3 7v3a1 1 0 1 0 2 0v-3a1 1 0 1 0-2 0z"/>
            </g></g>
          </svg>
        )
      case "logout":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g><g>
              <path d="M4 7h6v2H4v3L0 8l4-4zm11 9H6c-.6 0-1-.4-1-1v-3h2v2h7V2H7v2H5V1c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1z"/>
            </g></g>
          </svg>
        )
      default:
        return null;
    }
  }
}

SvgIcons.propTypes = {
  iconName: PropTypes.string.isRequired
};