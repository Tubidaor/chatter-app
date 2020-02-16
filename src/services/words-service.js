
import TokenService from './token-service';

import config from '../config';



const WordsService = {
  getDataByUser(user_name) {
    console.log(user_name)
    console.log(TokenService.getAuthToken())
    const allWords = `${config.API_ENDPOINT}/words/${user_name}`
    return fetch(allWords, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  arrangeData(data) {
    console.log(data)
    let newData = []

    // data.map(child => newData.id = )
    for(let i = 0; i < data.length; i++) {
      newData.push({ 
        "id": data[i][0].name,
        "data": data[i]
    })
    // console.log(newData.filter(data => Object.keys(data) != 'name'))
    return newData
  }
},


}

export default WordsService