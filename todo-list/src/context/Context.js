import createDataContext from './createDataContext'

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, { title: `Todo ${state.length + 1}` }]
    default:
      return state
  }
}

// in App.js, <App /> is the children props
const { Context, Provider } = createDataContext(todoReducer, [])

export { Context, Provider }
