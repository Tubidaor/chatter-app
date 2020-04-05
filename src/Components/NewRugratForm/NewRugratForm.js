import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';



export default class NewRugratForm extends Component {

  handleNewChildSubmit = (event) => {
    console.log('handleNewChildRan')
    event.preventDefault()
    const { name_, gender, birthdate } = event.target
    console.log(birthdate.value)
    const newChild = {
      name_: name_.value.charAt(0).toUpperCase(),
      gender: gender.value,
      birthdate: birthdate.value,
    }
    console.log(newChild.birthdate)
    AuthApiService.addChild(newChild)

    this.props.onAddSuccess()

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleNewChildSubmit}>
          <fieldset>
            <legend>Add New Rugrat</legend>
            <label>Name:</label>
            <input name='name_' type="text" placeholder="Chumbis"/>
            <br/>
            <label>Birthday:</label>
            <input name='birthdate' type="text" placeholder="02/17/2017"/>
            <br/>
            <label>Gender:</label>
            <input name='gender' type="text" placeholder="Female"/>
            <br/>
            <button type="submit">submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}