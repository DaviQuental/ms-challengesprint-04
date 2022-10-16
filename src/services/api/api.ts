import axios from "axios"
import { serviceInterceptors } from "../services.interceptors"

const apiEmail = axios.create({ 
  baseURL: 'http://localhost:8081',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})
serviceInterceptors(apiEmail)

const apiProduct = axios.create({ 
  baseURL: 'http://localhost:8082',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})
serviceInterceptors(apiProduct)

export { apiEmail, apiProduct }
export * from "./lib"