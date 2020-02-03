import React, { Component } from 'react';
import ChatterContext from '../../ChatterContext';



export default class WordForm extends Component {
  static contextType = ChatterContext;

  handleWordSubmit = (event) => {
    event.preventDefault()
    const { newWord } = event.target
    this.context.addWord(newWord.value);
  }
  render() {
    return (
      <section className='wordFormSection'>
        <form onSubmit={this.handleWordSubmit}>
        <fieldset>
            <legend>Enter a word</legend>
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