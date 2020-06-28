// automate reducer, dispatch actions, default data state, and Context
// so you can add Todos data, Comment data, Update data, etc without re-writing reducer, actions, default
import React, { useReducer } from 'react'

const createDataContext = (reducer, actions, initialState) => {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // actions === { addTodo: (dispatch) => {return () => dispatch{ type: 'CREATE'}}}
    // loop through actions object to pass the dispatch function as value to the Provider below
    const boundActions = {}
    for (let key in actions) {
      // key === 'addTodo', boundActions[key] === boundActions.addTodo
      // actions[key] is function: (dispatch) => {return () => dispatch{ type: 'CREATE'}
      boundActions[key] = actions[key](dispatch)
    }

    // ...boundActions contains key: addTodo, editTodo, etc
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}

export default createDataContext
