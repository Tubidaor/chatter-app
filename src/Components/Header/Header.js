import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import ChatterContext from '../../ChatterContext';


export default class Header extends Component {
  static contextType = ChatterContext


  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.updateLogin();
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
    const { loginError } = this.context.state
    
    return <>
      <nav className='Header'>
        <span>
          <Link to='/'>
            "Chatter"
          </Link>
        </span>
        {!loginError
          ? this.renderLogoutNav() 
          : this.renderLoginLink()}
      </nav>
    </>
  }
}
