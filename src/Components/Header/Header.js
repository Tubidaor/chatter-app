import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';


export default class Header extends Component {


  handleLogoutClick = () => {
    TokenService.clearAuthToken()

  }

  renderLogoutNav() {
    console.log('logoutnav ran')
    return (
      <div className='HeaderLoggedIn'>
        <Link to='/addChild'>
            AddChild
        </Link>
          {' - '}
        <Link 
          onClick={this.handleLogoutClick}
          to='/'>
            Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    console.log('renderlogin ran')
      return (
        <div className="HeaderNotLoggedIn">
          
          <Link to='/register'>
            Register
          </Link>
          {' - '}
          <Link to='/login'>
            Log in
          </Link>
        </div>
    )
  }

  render() {
    return <>
      <nav className='Header'>
        <span>
          <Link to='/'>
            "Chatter"
          </Link>
        </span>
        {TokenService.hasAuthToken()
          ? this.renderLogoutNav() 
          : this.renderLoginLink()}
      </nav>
    </>
  }
}
