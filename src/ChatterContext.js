import React, { Component } from 'react';
import {series} from './Components/Graphs/Graph-data';


const ChatterContext = React.createContext({
  error: null,
  setError: () => {},
  clearError: () => {},
  addWord: () => {},
})

let words = [ 'papa', 'mama','pout', 'please', 'thank you', 'love','te quiero mucho', 'family','instead','happy'
  ]


export default ChatterContext;

export class ChatterProvider extends Component {
  state = {
    error: null,
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

  addWord = (newWord) => {
    console.log(newWord, words.length,this.state.kidData[0].data[0])
    words.push(newWord)
    this.setState({
      kidData: [{
        data: [words.length]
      }, {
        data:[50,100,500, 600, 800,1000],
      },
      ],})
  }
  render() {
    const value ={
      state: this.state,
      setError: this.setError,
      clearError: this.clearError,
      staticLogin: this.staticLogin,
      addWord: this.addWord,
    }

    return (
      <ChatterContext.Provider value={value}>
        {this.props.children}
      </ChatterContext.Provider>
    )
  }
}