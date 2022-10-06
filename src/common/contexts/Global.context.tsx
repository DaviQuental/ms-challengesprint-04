import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'

import { EmailContextProvider } from '.'

interface GlobalContextProviderTypes {
  children: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } }
})

export const GlobalContextProvider: React.FC<GlobalContextProviderTypes> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <EmailContextProvider>{children}</EmailContextProvider>
    </QueryClientProvider>
  )
} 
