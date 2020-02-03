import React, { Component } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import ChatterContext from '../../ChatterContext';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    staticLogin: () => {},
    },
  }
  static contextType = ChatterContext;

  handleLoginSuccess = () => {
    const { location, history } = this.props
    console.log('handleloginran')
    history.push('/')
    this.context.staticLogin()
  }

  render() {
    return (
      <section className='LoginPageSection'>
        <LoginForm onLoginSuccess={this.handleLoginSuccess}
        />

      </section>
    )
  }
}