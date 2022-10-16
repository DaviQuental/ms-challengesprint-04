import { apiProduct } from "../../api"
import { ProductRequestTypes, ProductTypes } from "./Product.types"

const getProduct = async (id: number) => {
  const result = await apiProduct
    .get<ProductTypes>(`/api/produtos/${id}`)
    .then((response) => response)

  if (!result) return null

  return result
}

export default {
  get: getProduct
}