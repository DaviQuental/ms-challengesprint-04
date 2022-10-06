import React from 'react'
import { useQuery } from 'react-query'
import { EmailServices } from '../../../services'
import { useEmailContext } from '../../contexts'

export const useEmailQuery = () => {
  const { emails: contextEmails, setEmails: setContextEmails } = useEmailContext()

  const { data, ...rest } = useQuery(['emails'], () => EmailServices.get())

  // const getAllEmails = async () => {
  //   if(!contextEmails) {
  //     const emails = await emailsQuery.data?.data

  //     if(emails) {
  //       setContextEmails(emails)
  //     }
  //   }

  //   return contextEmails
  // }

  // const teste = getAllEmails()

  return {
    emails: data?.data || [],
    isEmpty: (data?.data || []).length === 0,
    ...rest
  }
}