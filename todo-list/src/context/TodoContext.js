import createDataContext from './createDataContext'
import uuid from 'react-native-uuid'

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [
        ...state,
        {
          id: uuid.v4(),
          title: `Todo ${state.length + 1}`,
        },
      ]
    case 'DELETE':
      return state.filter((item) => item.id !== action.id)
    default:
      return state
  }
}

// in App.js, <App /> is the children props
const { Context, Provider } = createDataContext(todoReducer, [])

export { Context, Provider }
