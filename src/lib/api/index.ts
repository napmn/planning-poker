import axios from 'axios'

const API_SERVICE_CONFIG = {
  baseURL: '/api',
  headers: {
    common: {
      'Content-Type': 'application/json'
    }
  }
}

const restClient = axios.create(API_SERVICE_CONFIG)

restClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export { restClient }
