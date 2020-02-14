import React, { Component } from 'react';
import ChatterContext from '../../ChatterContext';
import AuthApiService from '../../services/auth-api-service';



export default class WordForm extends Component {
  static contextType = ChatterContext;

  

  handleWordSubmit = (event) => {
    event.preventDefault()
    const { newWord, childName } = event.target
    AuthApiService.addword(newWord.value, childName.value);
  }
  render() {
    const { children=[] } = this.context
    return (
      <section className='wordFormSection'>
        <form onSubmit={this.handleWordSubmit}>
        <fieldset>
            <legend>Enter a word</legend>
              
            <label htmlFor='childSelect'>
              Choose Child
            </label>
            <select onChange={e => this.folderChoice(e.target.value)} id='childSelect' name='childName'>
              {/* <option value="noFolder">...</option> */}
              {children.map(child => 
              <option key={child.id} value={child.id}>
                {child.name_}
              </option>)}
            </select>
            <label>New word:</label>
            <input name='newWord' type="text" placeholder="Papa"/>
            <br/>
            <button type='submit'>submit</button>
          </fieldset>
        </form>
      </section>
    )
  }
}