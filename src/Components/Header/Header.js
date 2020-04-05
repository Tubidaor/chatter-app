import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import ChatterContext from '../../ChatterContext';


export default class Header extends Component {
  static contextType = ChatterContext


  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.updateLogin(true);
  }

  renderLogoutNav() {
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

  renderChatterHome() {
    return (
      <span>
          <Link to='/'>
            "Chatter"
          </Link>
        </span>
    )
  }

  renderChatterUser() {
    const userName = this.context.state.user_name
    return (
      <span>
          <Link to={`/words/${userName}`}>
            "Chatter"
          </Link>
        </span>
    )
  }

  
  

  renderChatterUser

  render() {
    
    return <>
      <nav className='Header'>
        {TokenService.hasAuthToken()
          ? this.renderChatterUser()
          : this.renderChatterHome()}
        {TokenService.hasAuthToken()
          ? this.renderLogoutNav() 
          : this.renderLoginLink()}
      </nav>
    </>
  }
}
