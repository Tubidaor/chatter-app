import React, { Component } from 'react';
import NewRugratForm from '../../Components/NewRugratForm/NewRugratForm';
import ChatterContext from '../../ChatterContext';
import TokenService from '../../services/token-service';


export default class NewRugratPage extends Component {
  static contextType = ChatterContext

  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleAddSuccess = () => {
    const userName = TokenService.getUserName()
    const { location, history } = this.props
    const destination = (location.state || {}).from || `/words/${userName}`
    history.push(destination)

    
  }

  render() {
    const userName = TokenService.getUserName()
    return (
      <section className='AddChildPageSection'>
        <NewRugratForm onAddSuccess={this.handleAddSuccess}
          user_name={userName}
        />
      </section>
    )
  }
}