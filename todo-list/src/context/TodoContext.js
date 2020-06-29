import createDataContext from './createDataContext'
import uuid from 'react-native-uuid'

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [
        ...state,
        {
          id: uuid.v4(),
          title: action.title,
          detail: action.detail,
        },
      ]
    case 'DELETE':
      return state.filter((item) => item.id !== action.id)
    case 'EDIT':
      return state.map((item) => {
        if (item.id === action.id) {
          return { title: action.title, detail: action.detail }
        } else {
          return state
        }
      })
    default:
      return state
  }
}

// in App.js, <App /> is the children props
const { Context, Provider } = createDataContext(todoReducer, [
  { id: '1adfsadf-adfasdfsad-adfasdf', title: 'Test1', detail: 'Detail1' },
  { id: '2-adfasdf-adfasdfsadf-adff', title: 'Test1', detail: 'Detail1' },
])

export { Context, Provider }
