import React, { Component } from 'react';
import './Registration-Form.css'
import AuthApiService from '../../services/auth-api-service';
import ErrorsDisplay from '../ErrorsDisplay/ErrorsDisplay';


export default class RegistrationForm extends Component {
  
  state = {
    error: null,
    user: null,
  }

  
  handleRegSubmit = (event) => {
    event.preventDefault()
    const { email, first_name, last_name, user_name, password, confirm  } = event.target
    if(password.value !== confirm.value) {
      this.setState({error: 'Passwords do not match'})
    }
    const firstNameSubmitted = first_name.value.charAt(0).toUpperCase() + first_name.value.slice(1)
    const lastNameSubmitted = last_name.value.charAt(0).toUpperCase() + last_name.value.slice(1)
    const user = {
      email: email.value,
      first_name: firstNameSubmitted,
      last_name: lastNameSubmitted,
      user_name: user_name.value,
      password: password.value,

    }

    AuthApiService.postUser(user)
      .then(res => this.setState({user: res}))
      .catch(res => this.setState({error: res.error}))
    
    this.state.user && this.props.handleSuccessfulReg()

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
            <input name='password' type="password" placeholder="**********"/>
            <br/>
            <label>Confirm:</label>
            <input name='confirm' type="password" placeholder="**********"/>
            <br/>
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}