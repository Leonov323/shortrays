import axios from 'axios'


const API_URL = 'https://api-shortrays-dev.herokuapp.com'

const token = localStorage.getItem('token')

export const api = axios.create({
  baseURL: API_URL,
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`
  
  return config
})
 