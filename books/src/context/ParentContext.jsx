import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const ParentContext = ({ children }) => {
  const [search, setSearch] = useState('')
  const [signup,setSignup]=useState(false)
  return <AppContext.Provider value={{ search, setSearch,signup,setSignup }}>
    {children}
  </AppContext.Provider>
}

export default ParentContext