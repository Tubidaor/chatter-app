
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
        "data": WordsService.makeArrayForChildData(data[i])
    })
    // console.log(newData.filter(data => Object.keys(data) != 'name'))
    return newData
  }
},
makeArrayForChildData(data) {
  let graphData = []
  data.map(item => {
    console.log(item.date_created)
    graphData.push({
      "x": WordsService.getAge(item.birthdate, item.date_created),
      "y": item.word_count,  
    })
  })
  
  return graphData
},
getAge(bD, createDate) {
  const bDate = new Date(bD)
  const cDate = new Date(createDate)
  
  const yearDiff = cDate.getFullYear() - bDate.getFullYear()
  const monthDiff = Math.abs((cDate.getMonth() - bDate.getMonth())/12)
  console.log(yearDiff+monthDiff)
  const ageDiff = yearDiff + monthDiff
  return ageDiff.toFixed(2)
  
}


}

export default WordsService