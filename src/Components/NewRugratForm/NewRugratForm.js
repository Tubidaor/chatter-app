import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './NewRugratForm.css'
import ErrorDisplay from '../ErrorsDisplay/ErrorsDisplay';
import WordsService from '../../services/words-service';
import ChatterContext from '../../ChatterContext';



export default class NewRugratForm extends Component {
  static contextType = ChatterContext

  state = {
    error: null,
  }


  handleNewChildSubmit = (event) => {
    event.preventDefault()
    const { name_, gender, birthdate } = event.target
    const name = name_.value.charAt(0).toUpperCase() + name_.value.slice(1)
    const newChild = {
      name_: name,
      gender: gender.value,
      birthdate: birthdate.value,
    }
    AuthApiService.addChild(newChild, this.props.user_name)
      .then(res => {
        WordsService.getChildrenByUser(this.props.user_name)
          .then(data => this.context.updateChildren(data))

        this.props.onAddSuccess()
      })
      .catch(res => this.setState({error: res.error}))
    
  }
  render() {
    return (
      <div>
        <div>{this.state.error && <ErrorDisplay error={this.state.error}/>}</div>
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
            <select name='gender' className="mFSelect">
              <option value="Female">
                Female
              </option>
              <option value="Male">
                Male
              </option>
            </select>
            <br/>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}