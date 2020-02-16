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
    updateUser: () => {},
    updateError: () => {},
  }

  static contextType = ChatterContext;

  handleLoginSuccess = (userName) => {
    const { location, history } = this.props
    console.log(userName)
    const destination = (location.state || {}).from || `/words/${userName}`
    this.context.updateUser(userName)
    this.context.updateLogin()
    console.log(this.context.state.user_name)
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