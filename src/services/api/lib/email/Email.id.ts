import { api } from "../../api"
import { EmailTypes } from "./Email.types"

const getEmail = async (id: number) => {
  const result = await api
    .get<EmailTypes>(`/api/email/${id}`)
    .then((response) => response)

  if (!result) return null

  return result
}

export default {
  get: getEmail
}