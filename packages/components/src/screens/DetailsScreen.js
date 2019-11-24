import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Carousel from '../components/Carousel';
import { routes } from '../constants';
import { listing } from '../api/listings';

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: routes.Details,
  };

  render() {
    return (
      <View style={styles.container}>
        <Carousel photos={listing.photos} />
        <Text>
          Details Screen - listingID:{' '}
          {this.props.navigation.getParam('listingID')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetailsScreen;
