import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import { routes, styleConstants } from '../constants';
import SquareImage from './SquareImage';
import OneLineText from './OneLineText';

const numColumns = 2;

class ListingCards extends React.Component {
  navigateToDetailsScreen = item => {
    this.props.navigation.navigate(routes.Details, {
      listingID: item.id,
    });
  };

  renderListingCard = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => this.navigateToDetailsScreen(item)}
          key={item.id}
        >
          <SquareImage
            uri={item.image_url}
            size={Dimensions.get('window').width / 2}
            borderRadius={styleConstants.spacing}
          />
          <View style={styles.textContainer}>
            <OneLineText style={styles.title} text={item.title} />
            <Text>{item.price}</Text>
            <View style={styles.sellerInfo}>
              <SquareImage
                uri={item.seller.image_url}
                size={40}
                borderRadius={20}
                style={{ marginRight: styleConstants.spacing }}
              />
              <OneLineText text={item.seller.username} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.listings}
        keyExtractor={item => item.id}
        renderItem={this.renderListingCard}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: styleConstants.spacing * 2,
  },
  item: {
    flex: 1,
  },
  textContainer: {
    padding: styleConstants.spacing,
  },
  title: {
    fontWeight: 'bold',
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: styleConstants.spacing / 2,
  },
});

export default withNavigation(ListingCards);
