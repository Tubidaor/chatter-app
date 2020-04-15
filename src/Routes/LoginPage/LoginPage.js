import React, { Component } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import { Section } from '../../Components/Utils/Utils';
import ChatterContext from '../../ChatterContext';
import TokenService from '../../services/token-service';


export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
    updateUser: () => {},
    updateError: () => {},
  }

  static contextType = ChatterContext;

  handleLoginSuccess = (userName) => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || `/words/${userName}`
    TokenService.saveUserName(userName)
    this.context.updateLogin(false)
    history.push(destination)
  }

  render() {
    return (
      <Section className='Loginpage'>
        <LoginForm onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}