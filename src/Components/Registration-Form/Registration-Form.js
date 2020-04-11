import React, { Component } from 'react';
import './Registration-Form.css'
import AuthApiService from '../../services/auth-api-service';
import ErrorsDisplay from '../ErrorsDisplay/ErrorsDisplay';


export default class RegistrationForm extends Component {
  
  state = { error: null }

  updateError = (error) => {
    this.setState({error: error})
  } 

  handleRegSubmit = (event) => {
    event.preventDefault()
    const { email, first_name, last_name, user_name, password, confirm  } = event.target
    if(password.value !== confirm.value) {
      this.setState({error: 'Passwords do not match'})
    }
    const user = {
      email: email.value,
      first_name: first_name.value,
      last_name: last_name.value,
      user_name: user_name.value,
      password: password.value,

    }

    AuthApiService.postUser(user, this.updateError)
      
    this.state.error === false && this.props.handleSuccessfulReg()

  }
  render() {
    return (
      <div>
        {this.state.error && <ErrorsDisplay error={this.state.error}/>}
        <form className='regForm' onSubmit={this.handleRegSubmit}>
          <fieldset>
            <legend>Register</legend>
            <label>Email:</label>
            <input name='email' type="text" placeholder="name@gmail.com"/>
            <br/>
            <label>First Name:</label>
            <input name='first_name' type="text" placeholder="Faith"/>
            <br/>
            <label>Last Name:</label>
            <input name='last_name' type="text" placeholder="Frusciante"/>
            <br/>
            <label>Username:</label>
            <input name='user_name' type="text" placeholder="AliceinWonderland"/>
            <br/>
            <label>Password:</label>
            <input name='password' type="text" placeholder="**********"/>
            <br/>
            <label>Confirm:</label>
            <input name='confirm' type="text" placeholder="**********"/>
            <br/>
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}