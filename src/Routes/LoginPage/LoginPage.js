import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    history.push('/')
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