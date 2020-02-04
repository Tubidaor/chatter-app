import React, { Component } from 'react';
import NewRugratForm from '../../Components/NewRugratForm/NewRugratForm';

export default class NewRugratPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleAddSuccess = user => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    return (
      <section className='AddChildPageSection'>
        <NewRugratForm onRegSuccess={this.handleAddSuccess}
        />
      </section>
    )
  }
}