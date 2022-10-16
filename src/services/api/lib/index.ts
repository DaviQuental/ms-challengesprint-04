import emailIdMethods from './email/Email.id'
import emailMethods from './email/Emails'
import productIdMethods from './product/Product.id'
import productMethods from './product/Products'

export const EmailServices = {
  id: emailIdMethods,
  ...emailMethods
}

export const ProductServices = {
  id: productIdMethods,
  ...productMethods
}

export * from "./email/Email.types"
export * from "./product/Product.types"