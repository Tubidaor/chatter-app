import React, {Component} from 'react';
import Graphs from '../../Components/Graphs/Graphs';
import WordForm from '../../Components/WordForm/WordForm';
import { Section } from '../../Components/Utils/Utils'
import AuthApiService from '../../services/auth-api-service';
import ChatterContext from '../../ChatterContext';
import WordsService from '../../services/words-service';




export default class UsersPage extends Component {
  // need to get children and pass them to the form, or set state to populate options
  // then need to set state so that the graphs can have the data. 
  static contextType =  ChatterContext
  

  
  componentDidMount() {
    const { user_name } = this.context.state
    console.log('username is', user_name)
    WordsService.getDataByUser(user_name)
      .then(data => console.log(data))
      
  }
  render(){
    return (
      <Section>
        <Graphs></Graphs>
        <WordForm></WordForm>
      </Section>

    )
  }
}