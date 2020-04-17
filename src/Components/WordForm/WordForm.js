import React, { Component } from 'react';
import ChatterContext from '../../ChatterContext';
import AuthApiService from '../../services/auth-api-service';
import WordsService from '../../services/words-service';
import ErrorDisplay from '../../Components/ErrorsDisplay/ErrorsDisplay'
import './WordForm.css';
import TokenService from '../../services/token-service';




export default class WordForm extends Component {
  static contextType = ChatterContext;

  state = {
    status: null,
  }

  handleWordSubmit = (event) => {
    event.preventDefault()
    const { newWord, childName } = event.target
    const wordSubmitted = newWord.value.charAt(0).toUpperCase() + newWord.value.slice(1)
    const word = {
      words: wordSubmitted,
      child_id: childName.value
    }
    AuthApiService.addWord(word)
      .then(res => this.setState({status: `The word "${res.words}" has been added`}))
      .catch(res => this.setState({status: res.error}))
      

    const user_name = TokenService.getUserName()
  
    WordsService.getDataByUser(user_name)
      .then(data => this.context.updateData(data))

    event.target.newWord.value = ''
    
  }
  
  
  
  render() {
    const { children=[] } = this.props
    const status = this.state.status
    
    return (
      <section className='wordFormSection'>
        {status && <ErrorDisplay error={status}/>}
    
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