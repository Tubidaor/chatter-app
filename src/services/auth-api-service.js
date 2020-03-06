import config from '../config'


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
    console.log(word)
    return fetch(`${config.API_ENDPOINT}/words/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(word),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => console.log(e))
          : res.json()
      )
  }
}

export default AuthApiService