import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import DetailScreen from './src/screens/DetailScreen'

// 3 types of Navigator:
// DrawerNavigator (left drawer),
// BottomTabNavigator (traditional),
// StackNavigator (central-linked), put screen object inside it

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Sigit Resto Search',
    },
  }
)

// React Native takes default export from App.js to render
export default createAppContainer(navigator)
