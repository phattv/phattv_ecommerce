import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import { routes, styleConstants } from '../constants';
import ListingCards from '../components/ListingCards';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: routes.Home,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styleConstants.fonts.header, styles.textCenter]}>
          Welcome to phattv's ecommerce
        </Text>
        <Text style={styles.textCenter}>Pull to refresh</Text>
        <ListingCards />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default withNavigation(HomeScreen);
