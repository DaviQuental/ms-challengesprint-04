import emailIdMethods from './email/Email.id'
import emailMethods from './email/Emails'

export const EmailServices = {
  id: emailIdMethods,
  ...emailMethods
}

export * from "./email/Email.types"