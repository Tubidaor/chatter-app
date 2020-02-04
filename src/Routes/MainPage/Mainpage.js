import React, { Component } from 'react';
import './Mainpage.css';
import ChatterContext from '../../ChatterContext';

import Graphs from '../../Components/Graphs/Graphs';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import WordForm from '../../Components/WordForm/WordForm';

export default class Mainpage extends Component {
  static contextType = ChatterContext;
  
  renderContent() {
    const { loginError, graphData, kidData } = this.context.state
    if( loginError === true ) {
      return (<>
        <Graphs className='Graphs' />
        <p> The baby is making a lot of weird sounds.. wait, was that a word? Did she just use it in the right context? Hearing your kids progress in their speech development is one of the best things about being a parent. You can keep track of it here. Try it out, just type in the word and hit submit, and we'll do the rest. </p>
        <RegistrationPage/>
        </>
      )
    }
    return (<>  
      <Graphs className='Graphs' />
      <WordForm/>
      </>
    )
  }
  render() {
    return (
      <section className='MainPageSection'>
        <h1>Chatter</h1>
        {this.renderContent()}
      </section>
    )
  }
}

