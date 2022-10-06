import { api } from "../../api"
import { EmailTypes } from "./Email.types"

const getAllEmails = async () => {
  const result = await api
    .get<EmailTypes[]>(`/api/emails`)
    .then((response) => response)

  if (!result) return null

  return result
}

export default {
  get: getAllEmails
}