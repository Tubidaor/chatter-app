import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import './LoginForm.css';
import ErrorsDisplay from '../ErrorsDisplay/ErrorsDisplay';


export default class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  }

  state = {error: null}

  handleSubmitJwtAuth = (event) => {
    event.preventDefault()
    this.setState({
      error:null
    })
    const { userName, password } = event.target

    AuthApiService.postLogin({
      user_name: userName.value,
      password: password.value,
    })
    .then(res => {
      TokenService.saveAuthToken(res.authToken)
      this.props.onLoginSuccess(userName.value)
      
      userName.value = ''
      password.value = ''
    })
    .catch(res => {
      this.setState({error: res.error })
    })
  }

  render() {
    return (
      <div>
        { this.state.error && <ErrorsDisplay error={this.state.error}/>}
        <form className="LoginForm"
        onSubmit={this.handleSubmitJwtAuth}>

          <fieldset>
            <legend>Log in</legend>
            <label>Username:</label>
            <input name='userName' type="text" placeholder="Alice"/>
            <br/>
            <label>Password:</label>
            <input name='password' type="password" placeholder="**********"/>
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}