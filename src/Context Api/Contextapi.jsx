import { useState } from "react"
import React,{createContext} from 'react'

export const addProjectResponseContext = createContext()

function Contextapi({children}) {
    const [addProjectResponse, setAddProjectResponse] = useState("")
  return (
    <>
    <addProjectResponseContext.Provider value={[addProjectResponse,setAddProjectResponse]}>
        {children}
    </addProjectResponseContext.Provider>
    </>
  )
}

export default Contextapi