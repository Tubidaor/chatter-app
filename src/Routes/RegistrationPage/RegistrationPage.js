import React, { Component } from 'react';
import RegistrationForm from '../../Components/Registration-Form/Registration-Form';

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push(`/users/${user.id}`)
  }

  render() {
    return (
      <section className='RegistrationPageSection'>
        <RegistrationForm handleSuccessfulReg={this.handleRegistrationSuccess}
        />
      </section>
    )
  }





}