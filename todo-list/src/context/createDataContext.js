import React, { useReducer } from 'react'

const createDataContext = (reducer, initialState) => {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}

export default createDataContext
