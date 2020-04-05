import React, { Component } from 'react';
import NewRugratForm from '../../Components/NewRugratForm/NewRugratForm';

export default class NewRugratPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleAddSuccess = () => {
    const { history } = this.props
    history.push('/')
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