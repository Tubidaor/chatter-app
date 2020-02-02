import React, { Component } from 'react';
import RegistrationForm from '../../Registration-Form/Registration-Form';

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/Login')
  }

  render() {
    return (
      <section className='RegistrationPageSection'>
        <RegistrationForm onRegSuccess={this.handleRegistrationSuccess}
        />
      </section>
    )
  }





}