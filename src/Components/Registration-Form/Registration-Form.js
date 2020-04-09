import React, { Component } from 'react';
import './Registration-Form.css'
import AuthApiService from '../../services/auth-api-service';



export default class RegistrationForm extends Component {

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

    AuthApiService.postUser(user)
      .then(userRes => {
        this.props.handleSuccessfulReg(userRes.id)
      })

  }
  render() {
    return (
      <div>
        <form className='regForm' onSubmit={this.handleRegSubmit}>
          <fieldset>
            <legend>Register</legend>
            <label>Email:</label>
            <input name='email' type="text" placeholder="name@gmail.com"/>
            <br/>
            <label>First Name:</label>
            <input name='first_name' type="text" placeholder="name@gmail.com"/>
            <br/>
            <label>Last Name:</label>
            <input name='last_name' type="text" placeholder="name@gmail.com"/>
            <br/>
            <label>Username:</label>
            <input name='user_name' type="text" placeholder="Alice"/>
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