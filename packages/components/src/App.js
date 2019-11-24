import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';
import { YellowBox } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ModalScreen from './screens/ModalScreen';
import { routes, uriPrefix } from './constants';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

// Declare all the routes
const MainStack = createStackNavigator(
  {
    [routes.Home]: HomeScreen,
    [routes.Details]: DetailsScreen,
  },
  {
    initialRouteName: routes.Home,
    ...{ cardStyle: { flex: 1 } },
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
      <SafeAreaView style={{ flex: 1, maxWidth: 600 }}>
        <StatusBar barStyle="dark-content" />
        <AppContainer
          uriPrefix={uriPrefix}
          // https://reactnavigation.org/docs/en/app-containers.html#calling-dispatch-or-navigate-on-a-container-ref
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </SafeAreaView>
    );
  }
}

export default App;
