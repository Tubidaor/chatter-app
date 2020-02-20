import React, { Component } from 'react';
import ChatterContext from '../../ChatterContext';
import AuthApiService from '../../services/auth-api-service';



export default class WordForm extends Component {
  // static contextType = ChatterContext;
  // defaultProps = {
    
  // }
  

  handleWordSubmit = (event) => {
    event.preventDefault()
    const { newWord, childName } = event.target
    console.log(newWord.value, childName.value)
    AuthApiService.addWord(newWord.value, childName.value);
  }

  
  render() {
    const { children=[] } = this.props
    console.log(children)
    return (
      <section className='wordFormSection'>
        <form onSubmit={this.handleWordSubmit}>
        <fieldset>
            <legend>Enter a word</legend>
              
            <label htmlFor='childSelect'>
              Choose Child
            </label>
            <select id='childSelect' name='childName'>
              {/* <option value="noFolder">...</option> */}
              {children.map(child => 
              <option key={child.id} value={child.id}>
                {child.name}
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