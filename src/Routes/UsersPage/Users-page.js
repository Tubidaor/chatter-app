import React, {Component} from 'react';
import Graphs from '../../Components/Graphs/Graphs';
import WordForm from '../../Components/WordForm/WordForm';
import { Section } from '../../Components/Utils/Utils'
import ChatterContext from '../../ChatterContext';
import WordsService from '../../services/words-service';




export default class UsersPage extends Component {
  // need to get children and pass them to the form, or set state to populate options
  // then need to set state so that the graphs can have the data. 
  static contextType =  ChatterContext
  

  
  componentDidMount() {
    const { userName } = this.props.match.params
  
    WordsService.getDataByUser(userName)
      .then(data => this.context.updateData(data))  
  }

  


  render() {
    const { allUserData } = this.context.state
    const childList = WordsService.arrangeDataForWordPost(allUserData)
    const graphData = WordsService.arrangeDataForGraph(allUserData)

    return (
      <Section>
        <Graphs data={graphData}></Graphs>
        <WordForm children={childList}></WordForm>
      </Section>

    )
  }
}