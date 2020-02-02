import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


export default class Header extends Component {

  renderLoginLink() {
    return (
      <div className="Header-NotLoggedIn">
        <Link to='/Register'>
          Register
        </Link>
        {' - '}
        <Link to='/Login'>
          Log in
        </Link>
      </div>
    )
  }
  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            "Chatter"
          </Link>
        </h1>
        {this.renderLoginLink()}
      </nav>
    )
  }
}
