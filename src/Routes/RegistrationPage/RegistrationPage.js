import React, { Component } from 'react';
import RegistrationForm from '../../Components/Registration-Form/Registration-Form';
import WordsService from '../../services/words-service'
import ChatterContext from '../../ChatterContext';

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  static contextType = ChatterContext;

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
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