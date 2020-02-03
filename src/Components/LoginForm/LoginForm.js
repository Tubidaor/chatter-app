import React, { Component } from 'react';
import ChatterContext from '../../ChatterContext';

export default class Login extends Component {
  static contextType = ChatterContext

  static defaultProps = {
    onLoginSuccess: () => {},
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submitran')
    const { userName, password } = event.target
    const correctUN = 'chumbis'
    const correctPW = 'chumbis'
    console.log(userName.value, password.value)
    if(userName.value === correctUN && password.value === correctPW ) {
      this.props.onLoginSuccess()
      console.log('handlesubmitended')
    }
  }

  render() {
    return (
      <div>
        <form className="LoginForm"
        onSubmit={this.handleSubmit}>

          <fieldset>
            <legend>Log in</legend>
            <label>Username:</label>
            <input name='userName' type="text" placeholder="Alice"/>
            <br/>
            <label>Password:</label>
            <input name='password' type="text" placeholder="**********"/>
            <button type='submit'>submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}