import { AxiosError } from "axios"
import { apiEmail } from "../../api"
import { EmailTypes } from "./Email.types"

const getEmail = async (id: number) => {
  const result = await apiEmail
    .get<EmailTypes>(`/api/email/${id}`)
    .then((response) => response)
    .catch((error: AxiosError) => {
      if(error.response?.status !== 200) return []
    })
    
  return result
}

export default {
  get: getEmail
}