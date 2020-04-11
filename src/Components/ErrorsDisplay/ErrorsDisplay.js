import React, { Component } from 'react';
import './ErrorsDisplay.css'

export default class ErrorDisplay extends Component {


  render() {
    
    return (
      <div className='errorsDisplay'>
        <p>{`${this.props.error}`}</p>
      </div>
    )
  }
}