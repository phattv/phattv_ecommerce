import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Carousel from '../components/Carousel';
import SquareImage from '../components/SquareImage';
import { routes, styleConstants } from '../constants';
import { listing } from '../api/listings';

const sellerImageSize = 80;
class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: routes.Details,
  };

  render() {
    return (
      <View style={styles.container}>
        <Carousel photos={listing.photos} />
        <View style={styles.textContainer}>
          <Text style={styleConstants.fonts.headerNotBold}>
            {listing.title}
          </Text>
          <Text style={styleConstants.fonts.header}>{listing.price}</Text>
          <Text style={styleConstants.paddingTop}>{listing.description}</Text>

          <Text
            style={[styleConstants.fonts.headerTwo, styleConstants.paddingTop]}
          >
            Seller Information
          </Text>
          <View style={styles.sellerInfo}>
            <SquareImage
              size={sellerImageSize}
              uri={listing.seller.image_url}
              style={styles.sellerImage}
            />
            <Text>{listing.seller.username}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    padding: styleConstants.spacing,
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    ...styleConstants.paddingTop,
  },
  sellerImage: {
    marginRight: styleConstants.spacing,
  },
});

export default DetailsScreen;
