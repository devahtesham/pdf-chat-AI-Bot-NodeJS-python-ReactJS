import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

// STEP 01 create context
const DocumentHistoryContext = createContext({})

// STEP 01 context provider
const DocumentHistoryContextProvider = ({ children }) => {
    const [name,setName] = useState("hassan")
    const [email,setEmail] = useState("email@sdsdsd")
    // let objToSend = 
    return <DocumentHistoryContext.Provider value={{
        name,
        setName,
        email
    }}>{children}</DocumentHistoryContext.Provider>
}

export { DocumentHistoryContextProvider, DocumentHistoryContext }




