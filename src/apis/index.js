import axios from 'axios'

const API = axios.create({
  beseURL:
    'https://jsonplaceholder.typicode.com/users'
})


export const fetchGetData = async () => {
  // return await API.get('/users')
  const result = await API.get('/users')
  console.log(result, 'chekc')
  return result
}
