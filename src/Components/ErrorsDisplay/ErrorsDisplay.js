import React, { Component } from 'react';
import ChatterContext from '../../ChatterContext';

export default class ErrorDisplay extends Component {

  static contextType = ChatterContext

  render() {
    const error = this.context.state.error
    return (
      <div>
        <p>{`${error}`}</p>
      </div>
    )
  }
}