import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ModalScreen from './screens/ModalScreen';
import { routes, uriPrefix } from './constants';

// Declare all the routes
const MainStack = createStackNavigator(
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

const RooStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    [routes.Modal]: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

// https://reactnavigation.org/docs/assets/modal/tree.png
const AppContainer = createAppContainer(RooStack);

class App extends React.Component {
  render() {
    return (
      // without the style you may see a blank screen
      <View style={{ flex: 1 }}>
        <AppContainer
          uriPrefix={uriPrefix}
          // https://reactnavigation.org/docs/en/app-containers.html#calling-dispatch-or-navigate-on-a-container-ref
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </View>
    );
  }
}

export default App;
