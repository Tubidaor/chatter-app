import React, { Component } from 'react';
import {series} from './Components/Graphs/Graph-data';


const ChatterContext = React.createContext({
  error: null,
  setError: () => {},
  clearError: () => {},
  addWord: () => {},
  staticLogin: () => {},
  updateUser: () => {},
})

let words = [ 'papa', 'mama','pout', 'please', 'thank you', 'love','te quiero mucho', 'family','instead','happy'
  ]


export default ChatterContext;

export class ChatterProvider extends Component {
  state = {
    error: null,
    user_name: '',
    loginError: true,
    graphData: series,
    kidData: [{
      data: [words.length]
    }, {
      data:[50,100,500, 600, 800,1000],
    },
    ],
  }


  setError = error => {
    console.error(error)
    this.ListeningStateChangedEvent({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  staticLogin = () => {
    this.setState({
      loginError: false,
    })
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
  render() {
    const value ={
      state: this.state,
      setError: this.setError,
      clearError: this.clearError,
      staticLogin: this.staticLogin,
      updateUser: this.updateUser
    }

    return (
      <ChatterContext.Provider value={value}>
        {this.props.children}
      </ChatterContext.Provider>
    )
  }
}