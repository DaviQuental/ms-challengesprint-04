import { Dispatch, SetStateAction, ReactNode}  from "react";
import { ProductTypes } from "../../../services"

export interface ProductContextTypes {
  products: ProductTypes[] | null
  setProducts: Dispatch<SetStateAction<ProductTypes[] | null>>
}

export interface ProductContextProviderTypes { 
  children: ReactNode
}