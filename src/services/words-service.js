
import TokenService from './token-service';
import ChatterContext from '../ChatterContext';
import config from '../config';


const WordsService = {
  getDataByUser(user_name) {
    console.log(user_name)
    const allWords = `${config.API_ENDPOINT}/words/tubidaor`
    return fetch(allWords, {
      // method: "GET",
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


}

export default WordsService