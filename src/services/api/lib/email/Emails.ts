import { AxiosError } from "axios"
import { apiEmail } from "../../api"
import { EmailTypes } from "./Email.types"

const getAllEmails = async () => {
  const result = await apiEmail
    .get<EmailTypes[]>(`/api/emails`)
    .then((response) => response)
    .catch((error: AxiosError) => {
      if(error.response?.status !== 200) return null
    })

  //if (!result) return null

  return result
}

export default {
  get: getAllEmails
}