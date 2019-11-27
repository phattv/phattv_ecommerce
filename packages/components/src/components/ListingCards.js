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
import { get } from 'lodash';

import { routes, styleConstants } from '../constants';
import SquareImage from './SquareImage';
import OneLineText from './OneLineText';
import CategoryText from './CategoryText';

const numColumns = 2;
const imageSize =
  Dimensions.get('window').width / 2 - styleConstants.spacing * 2; // Half of window size with 5px horizontal padding

class ListingCards extends React.Component {
  navigateToDetailsScreen = item => {
    this.props.navigation.navigate(routes.Details, {
      id: item.id,
    });
  };

  renderListingCard = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => this.navigateToDetailsScreen(item)}
          key={item.id}
        >
          <View style={styles.imageContainer}>
            <SquareImage
              uri={item.image_url}
              size={imageSize}
              borderRadius={styleConstants.spacing}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <OneLineText style={styles.title} text={item.title} />
          <View style={styleConstants.layout.leftRightView}>
            <Text>S${item.price}</Text>
            <CategoryText category={get(item, 'category', {})} />
          </View>
          <TouchableOpacity style={styles.sellerInfo}>
            <SquareImage
              uri={get(item, 'seller.image_url', '')}
              size={40}
              borderRadius={20}
              style={{ marginRight: styleConstants.spacing }}
            />
            <OneLineText text={get(item, 'seller.username', '')} />
          </TouchableOpacity>
        </View>
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
  imageContainer: {
    alignItems: 'center',
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
