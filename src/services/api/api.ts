import axios from "axios"
import { serviceInterceptors } from "../services.interceptors"

const api = axios.create({ 
  baseURL: 'http://localhost:8081',
  // withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})
serviceInterceptors(api)

export { api }
export * from "./lib"