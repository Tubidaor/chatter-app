import React, { Component } from 'react';

export default class Login extends Component {

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { userName, password } = event.target
    const correctUN = 'chumbis'
    const correctPW = 'chumbis'
    if(userName === correctUN && password === correctPW ) {
      this.onLoginSuccess()
    }
  }

  onLoginSuccess = () => {
    const { location, history } = this.props
    history.push('/')
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