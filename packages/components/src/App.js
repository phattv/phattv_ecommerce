import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { routes } from './constants';

// Declare all the routes
const AppNavigator = createStackNavigator(
  {
    [routes.Home]: HomeScreen,
    [routes.Details]: DetailsScreen,
  },
  {
    initialRouteName: routes.Home,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
