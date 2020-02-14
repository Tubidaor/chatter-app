import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';


export default class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  }

  state = {error: null}

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log('submitran')
  //   const { userName, password } = event.target
    
  //   console.log(userName.value, password.value)
  //   if(userName.value === correctUN && password.value === correctPW ) {
  //     this.props.onLoginSuccess()
  //     console.log('handlesubmitended')
  //   }
  // }

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
        <form className="LoginForm"
        onSubmit={this.handleSubmitJwtAuth}>

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