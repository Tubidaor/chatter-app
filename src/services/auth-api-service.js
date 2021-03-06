import config from '../config'
import TokenService from '../services/token-service'

const AuthApiService = {
  
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => 
        (!res.ok)
          ? res.json().then( e => Promise.reject(e))
          : res.json()
    )
  },

  async addWord(word) {
    
    
    return fetch(`${config.API_ENDPOINT}/words`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(word),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  async addChild(newChild, user_name) {
    return fetch(`${config.API_ENDPOINT}/children/${user_name}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newChild),
    }).then(res => 
      (!res.ok)
        ? res.json().then( e => Promise.reject(e))
        : res.json()
    )
  }
}

export default AuthApiService