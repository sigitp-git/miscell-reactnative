import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import DetailScreen from './src/screens/DetailScreen'
import CreateScreen from './src/screens/CreateScreen'
import { Provider } from './src/context/TodoContext'
import EditScreen from './src/screens/EditScreen'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Detail: DetailScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Todo App',
    },
  }
)

const App = createAppContainer(navigator)

// adding Context Provider for useContext
// App wrapped inside Provider,
// change in Provider state will re-render the entire App
// state maintained in the Provider
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
