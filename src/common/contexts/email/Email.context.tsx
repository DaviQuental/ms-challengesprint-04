import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { EmailContextTypes, EmailContextProviderTypes } from "./Email.context.types"
import { EmailTypes } from "../../../services"

export const EmailContext = createContext({} as EmailContextTypes)

export const useEmailContext = () => useContext(EmailContext)

export const EmailContextProvider: React.FC<EmailContextProviderTypes> = ({ children }) => {
  const [emails, setEmails] = useState<EmailTypes[] | null>(null)

  const value = useMemo(() => ({
    emails, 
    setEmails 
  }), 
    [emails]
  )

  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  )
}

export * from './Email.context.types'

