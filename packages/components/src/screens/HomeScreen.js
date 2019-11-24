import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

import { routes, styleConstants } from '../constants';
import ListingCards from '../components/ListingCards';
import { listings } from '../api/listings';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: routes.Home,
    };
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Welcome to phattv's ecommerce</Text>
        <ListingCards listings={listings} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { textAlign: 'center', ...styleConstants.fonts.header },
});

export default HomeScreen;
