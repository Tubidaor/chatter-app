import React, { Component } from 'react';
import NewRugratForm from '../../Components/NewRugratForm/NewRugratForm';
import ChatterContext from '../../ChatterContext';

export default class NewRugratPage extends Component {
  static contextType = ChatterContext

  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleAddSuccess = () => {
    const { location, history } = this.props
    const userName = this.context.state.user_name
    const destination = (location.state || {}).from || `/words/${userName}`
    history.push(destination)
  }

  render() {
    return (
      <section className='AddChildPageSection'>
        <NewRugratForm onAddSuccess={this.handleAddSuccess}
        />
      </section>
    )
  }
}