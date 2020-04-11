import React, { Component } from 'react';
import ChatterContext from '../../ChatterContext';
import AuthApiService from '../../services/auth-api-service';
import WordsService from '../../services/words-service';
import ErrorDisplay from '../../Components/ErrorsDisplay/ErrorsDisplay'
import './WordForm.css';




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

    event.target.newWord.value = ''
    
  }
  
  
  
  render() {
    const { children=[] } = this.props
    const error = this.context.state.error
    return (
      <section className='wordFormSection'>
        {this.context.state.error && <ErrorDisplay errors={error}/>}
        <form className="wordForm" onSubmit={this.handleWordSubmit}>
        <fieldset>
            <legend>Enter a word</legend>
              
            <label htmlFor='childSelect'>
              Child:
            </label>
            <select className="selectInput" id='childSelect' name='childName'>
              {children.map(child => 
              <option key={child.id} value={child.id}>
                {child.name_}
              </option>)}
            </select>
            <br/>
            <label>New word:</label>
            <input className="wordInput" name='newWord' type="text" placeholder="Papa"/>
            <br/>
            <button className="wordFormButton" type='submit'>Submit</button>
          </fieldset>
        </form>
      </section>
    )
  }
}