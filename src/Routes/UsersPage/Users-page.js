import React, {Component} from 'react';
import Graphs from '../../Components/Graphs/Graphs';
import WordForm from '../../Components/WordForm/WordForm';
import { Section } from '../../Components/Utils/Utils'
import ChatterContext from '../../ChatterContext';
import WordsService from '../../services/words-service';




export default class UsersPage extends Component {

  static contextType =  ChatterContext
  

  
  componentDidMount() {
    const { userName } = this.props.match.params
  
    WordsService.getDataByUser(userName)
      .then(data => this.context.updateData(data))

    WordsService.getChildrenByUser(userName)
      .then(data => this.context.updateChildren(data))
  }

  
  

  render() {
    const { allUserData, childrenData } = this.context.state
    const graphData = WordsService.arrangeDataForGraph(allUserData, this.context.state.mainPageData)

    return (
      <Section>
        <Graphs data={graphData}></Graphs>
        <WordForm children={childrenData}></WordForm>
      </Section>

    )
  }
}