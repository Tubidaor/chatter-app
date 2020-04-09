import React, { Component } from 'react';
import ChatterContext from '../../ChatterContext';
import './ErrorsDisplay.css'

export default class ErrorDisplay extends Component {

  static contextType = ChatterContext

  render() {
    const error = this.context.state.error
    return (
      <div className='errorsDisplay'>
        <p>{`${error}`}</p>
      </div>
    )
  }
}