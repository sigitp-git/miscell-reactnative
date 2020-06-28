import createDataContext from './createDataContext'

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, { title: `Todo ${state.length + 1}` }]
    default:
      return state
  }
}

const addTodo = (dispatch) => {
  return () => {
    dispatch({ type: 'CREATE' })
  }
}

// in App.js, <App /> is the children props
export const { Context, Provider } = createDataContext(reducer, { addTodo }, [])
