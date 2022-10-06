import { AxiosInstance } from "axios";

export const serviceInterceptors = (api: AxiosInstance) =>  {
  return api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error(`There's an error: ${error}`)
      return Promise.reject(error)
    }
  )
}