import React, { Component } from 'react';
import ChatterContext from '../../ChatterContext';
import AuthApiService from '../../services/auth-api-service';
import WordsService from '../../services/words-service';
import ErrorDisplay from '../../Components/ErrorsDisplay/ErrorsDisplay'




export default class WordForm extends Component {
  static contextType = ChatterContext;

  handleWordSubmit = (event) => {
    event.preventDefault()
    const { newWord, childName } = event.target
    const word = {
      words: newWord.value,
      child_id: childName.value
    }
    AuthApiService.addWord(word, this.context.setError)

    const { user_name } = this.context.state
  
    WordsService.getDataByUser(user_name)
      .then(data => this.context.updateData(data))

    event.target.newWord = ''
    
  }
  
  
  
  render() {
    const { children=[] } = this.props
    return (
      <section className='wordFormSection'>
        {this.context.state.error && <ErrorDisplay/>}
        <form onSubmit={this.handleWordSubmit}>
        <fieldset>
            <legend>Enter a word</legend>
              
            <label htmlFor='childSelect'>
              Choose Child
            </label>
            <select id='childSelect' name='childName'>
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