import { AxiosError, AxiosResponse } from "axios"
import { apiProduct } from "../../api"
import { ProductRequestTypes, ProductTypes } from "./Product.types"

const getAllProducts = async () => {
  const result = await apiProduct
    .get<ProductTypes[]>(`/api/produtos`)
    .then((response) => response)
    .catch((error: AxiosError) => {
      if(error.response?.status !== 200) return null
    })
    
  return result
}

const postProduct = async (product: ProductRequestTypes) => {
  const result = await apiProduct
    .post<ProductTypes>(`/api/produtos/`, product)
    .then((response) => response)
    .catch((error: AxiosError) => {
      if(error.response?.status !== 201) return null
    })

  return result
}

export default {
  get: getAllProducts,
  post: postProduct
}