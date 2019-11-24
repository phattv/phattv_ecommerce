import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { routes } from '../constants';
import ListingCards from '../components/ListingCards';
import { listings } from '../api/listings';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: routes.Home,
      headerRight: (
        <Button
          onPress={() => {
            navigation.navigate(routes.Modal);
          }}
          title="Modal"
        />
      ),
    };
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <ListingCards listings={listings} />
      </ScrollView>
    );
  }
}

export default HomeScreen;
