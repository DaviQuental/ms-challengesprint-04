import React from 'react'
import { useQuery } from 'react-query'
import { EmailServices, ProductServices } from '../../../services'
import { useEmailContext, useProductContext } from '../../contexts'

export const useProductQuery = () => {
  const { products: contextProducts, setProducts: setContextProducts } = useProductContext()

  const { data, ...rest } = useQuery(['products'], () => ProductServices.get())

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
    products: data?.data || [],
    isEmpty: (data?.data || []).length === 0,
    ...rest
  }
}