

// return await API.get('/users')
//const result = await API.get('/users')
//console.log(result, 'chekc')
//return result


import axios from 'axios'

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const fetchGetData = async () => {
  return await API.get('/users')
}
