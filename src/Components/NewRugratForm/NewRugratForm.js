import React, { Component } from 'react';



export default class NewRugratForm extends Component {
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Add New Rugrat</legend>
            <label>Name:</label>
            <input type="text" placeholder="Chumbis"/>
            <br/>
            <label>Birthday:</label>
            <input type="text" placeholder="02/17/2017"/>
            <br/>
            <label>Gender:</label>
            <input type="text" placeholder="Female"/>
            <br/>
            <button type="submit">submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}