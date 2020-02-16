import React, { Component } from 'react';
import {series} from './Components/Graphs/Graph-data';


const ChatterContext = React.createContext({
  error: null,
  setError: () => {},
  clearError: () => {},
  addWord: () => {},
  updateUser: () => {},
  updateData: () => {},
  updateLogin: () => {},
})

let words = [ 'papa', 'mama','pout', 'please', 'thank you', 'love','te quiero mucho', 'family','instead','happy'
  ]


export default ChatterContext;

export class ChatterProvider extends Component {
  state = {
    error: null,
    user_name: '',
    loginError: true,
    mainPageData: [{
          "id": "Standard",
          "data": [
            {
              "x": 0,
              "y":0,
            },
            {
              "x": 1,
              "y":100,
            },
            {
              "x": 2,
              "y":500,
            },
            {
              "x": 3,
              "y":1500,
            },
          ],
    }],
    userData: []
  }


  setError = error => {
    console.error(error)
    this.ListeningStateChangedEvent({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  updateUser = (userName) => {
    this.setState({
      user_name: userName
    })
  }
  addWords = (children, data=[]) => {
    this.setState({
      children,
      data,
    })
  }

  updateData = (newData) => {
    this.setState({
      userData: newData
    })
  }

  updateLogin = () => {
    this.setState({
      loginError: !true,
    })
  }

  render() {
    const value ={
      state: this.state,
      setError: this.setError,
      clearError: this.clearError,
      updateLogin: this.updateLogin,
      updateUser: this.updateUser,
      updateData: this.updateData,
    }

    return (
      <ChatterContext.Provider value={value}>
        {this.props.children}
      </ChatterContext.Provider>
    )
  }
}