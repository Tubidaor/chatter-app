import React, { Component } from 'react';
import './Registration-Form.css'


export default class RegistrationForm extends Component {
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Register</legend>
            <label>Email:</label>
            <input type="text" placeholder="name@gmail.com"/>
            <br/>
            <label>Username:</label>
            <input type="text" placeholder="Alice"/>
            <br/>
            <label>Password:</label>
            <input type="text" placeholder="**********"/>
            <br/>
            <label>Confirm:</label>
            <input type="text" placeholder="**********"/>
            <br/>
            <button type='submit'>submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}