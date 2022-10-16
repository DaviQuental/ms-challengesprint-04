import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'

import { EmailContextProvider } from '.'
import { ProductContextProvider } from './product/Product.context';

interface GlobalContextProviderTypes {
  children: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } }
})

export const GlobalContextProvider: React.FC<GlobalContextProviderTypes> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductContextProvider>
        <EmailContextProvider>{children}</EmailContextProvider>
      </ProductContextProvider>
    </QueryClientProvider>
  )
} 
