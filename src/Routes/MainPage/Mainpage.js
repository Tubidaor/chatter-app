import React, { Component } from 'react';
import './Mainpage.css';

import Graphs from '../../Graphs/Graphs';
import RegistrationForm from '../../Registration-Form/Registration-Form';
import RegistrationPage from '../RegistrationPage/RegistrationPage';

export default class Mainpage extends Component {
  render() {
    return (
      <div className="MainpageMainDiv">
        <h1>Chatter</h1>
        <Graphs className='Graphs'/>
        <p> The baby is making a lot of weird sounds.. wait, was that a word? Did she just use it in the right context? Hearing your kids progress in their speech development is one of the best things about being a parent. You can keep track of it here. Try it out, just type in the word and hit submit, and we'll do the rest. </p>
        <RegistrationPage/>
        
      </div>
    )
  }
}

