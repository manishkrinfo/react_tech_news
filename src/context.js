import React, { useContext } from 'react'

const AppContext = React.createContext();

// to create a provide function
const AppProvider = ({children}) => {
   return (
      <AppContext.Provider value={"Hellos"}>
         {children}
      </AppContext.Provider>
   )
}

// create custom hooks
const useGlobalContext = () => {
   return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext};