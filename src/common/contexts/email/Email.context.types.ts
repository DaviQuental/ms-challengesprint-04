import React, { Dispatch, SetStateAction, ReactNode}  from "react";
import { EmailTypes } from "../../../services"

export interface EmailContextTypes {
  emails: EmailTypes[] | null
  setEmails: Dispatch<SetStateAction<EmailTypes[] | null>>
}

export interface EmailContextProviderTypes { 
  children: ReactNode
}