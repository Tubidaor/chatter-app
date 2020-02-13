import React, { Component } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import { Section } from '../../Components/Utils/Utils';
import ChatterContext from '../../ChatterContext';


export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  static contextType = ChatterContext;

  handleLoginSuccess = () => {
    console.log('handle success ran')
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
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