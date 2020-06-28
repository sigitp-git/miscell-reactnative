import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/Context'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
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
