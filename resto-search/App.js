import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'

// 3 types of Navigator:
// DrawerNavigator (left drawer),
// BottomTabNavigator (traditional),
// StackNavigator (central-linked), put screen object inside it

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Resto Search'
    }
  }
)

// React Native takes default export from App.js to render
export default createAppContainer(navigator)
