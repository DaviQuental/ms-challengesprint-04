import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { ProductContextTypes, ProductContextProviderTypes } from "./Product.context.types"
import { ProductTypes } from "../../../services"

export const ProductContext = createContext({} as ProductContextTypes)

export const useProductContext = () => useContext(ProductContext)

export const ProductContextProvider: React.FC<ProductContextProviderTypes> = ({ children }) => {
  const [products, setProducts] = useState<ProductTypes[] | null>(null)

  const value = useMemo(() => ({
    products, 
    setProducts 
  }), 
    [products]
  )

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}

export * from './Product.context.types'

