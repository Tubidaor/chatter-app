import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import ChatterContext from '../../ChatterContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'



export default class Header extends Component {
  static contextType = ChatterContext


  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.updateLogin(true);
  }

  renderLogoutNav() {
    return (
      <div className='HeaderLoggedIn'>
        <Link className="navLinks" to='/addChild'>
            Add Child
        </Link>
          {' - '}
        <Link className="navLinks"
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
            <FontAwesomeIcon icon={faComments}/>
            {" "}
            Chatter
          </Link>
      </span>
    )
  }

  renderChatterUser() {
    const userName = this.context.state.user_name
    return (
      <span>
          <Link to={`/words/${userName}`}>
            <FontAwesomeIcon icon={faComments}/>
            {" "}
            Chatter
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
