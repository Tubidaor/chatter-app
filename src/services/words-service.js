
import TokenService from './token-service';


import config from '../config';



const WordsService = {
  getDataByUser(user_name) {
    const allWords = `${config.API_ENDPOINT}/words/${user_name}`
    return fetch(allWords, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getChildrenByUser() {
    const childrenUrl = `${config.API_ENDPOINT}/children`
    return fetch(childrenUrl, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  arrangeDataForGraph(data) {
    data = data.filter(value => Object.keys(value).length !== 0)

    let newData = []
    for(let i = 0; i < data.length; i++) {
        newData.push({ 
          "id": data[i][0].name,
          "data": WordsService.makeArrayForChildData(data[i])
        })
      }
  return newData
},

arrangeDataForWordPost(data) {
  let newData = []

  for(let i = 0; i < data.length; i++) {
    newData.push({ 
      "id": data[i][0].id,
      "name": data[i][0].name,
  })
}
return newData

},
makeArrayForChildData(data) {
  let graphData = []
  
  data.map(item => 
    
    graphData.push({
      "x": WordsService.getAge(item.birthdate, item.date_created),
      "y": item.word_count,  
    })
  )
  let gData = [{"x":0, "y":0},...graphData]
  const preFixData = [...graphData,{"x":0, "y":0}]
  const unique = []
  let i
  for(i=0; i < preFixData.length; i++) {
      if(preFixData[i].x !== gData[i].x) {
        unique.push(gData[i])
      }
      // unique.push(gData[i])
    }
  
  return unique
},
// makeArrayForChilren(data) {
//   console.log(data)
//   let graphData = []
//   data.map(child => graphData.push(child.name_, child))
//   console.log(graphData)
//   return graphData
// },
getAge(bD, createDate) {
  
  const bDate = new Date(bD)
  const cDate = new Date(createDate)
  
  const yearDiff = cDate.getFullYear() - bDate.getFullYear()
  const monthDiff = Math.abs((cDate.getMonth() - bDate.getMonth())/12)
  
  const ageDiff = yearDiff + monthDiff
  return ageDiff.toFixed(2)
  
},



}

export default WordsService