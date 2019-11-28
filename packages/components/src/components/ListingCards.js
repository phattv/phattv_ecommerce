import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { get } from 'lodash';

import { routes, styleConstants } from '../constants';
import SquareImage from './SquareImage';
import OneLineText from './OneLineText';
import CategoryText from './CategoryText';
import SellerProfile from './SellerProfile';

const numColumns = 2;
const imageSize = Dimensions.get('window').width / 2 - styleConstants.spacing; // Half of window size with 5px horizontal padding

class ListingCards extends React.Component {
  onRefresh = () => {
    this.props.getListings();
  };

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
          <SellerProfile seller={get(item, 'seller', {})} size={40} />
        </View>
      </View>
    );
  };

  render() {
    return (
      <>
        <FlatList
          ref={ref => {
            this.flatListRef = ref;
          }}
          style={styles.container}
          data={this.props.listings}
          keyExtractor={item => item.id}
          renderItem={this.renderListingCard}
          numColumns={numColumns}
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this.onRefresh}
            />
          }
        />
        <Button
          onPress={() =>
            this.flatListRef.scrollToOffset({ animated: true, offset: 0 })
          }
          title="Scroll to top"
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: styleConstants.spacing,
  },
  item: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
  },
  textContainer: {
    padding: styleConstants.spacing / 2,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default withNavigation(ListingCards);
