import React, {Component} from 'react';
import Graphs from '../../Components/Graphs/Graphs';
import WordForm from '../../Components/WordForm/WordForm';
import Section from '../../Components/Utils/Utils'



export default class UsersPage extends Component {
  render(){
    return (
      <Section>
        <Graphs></Graphs>
        <WordForm></WordForm>
      </Section>

    )
  }
}