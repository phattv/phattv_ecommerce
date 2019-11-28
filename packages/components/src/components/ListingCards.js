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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { routes, styleConstants, pageSize } from '../constants';
import { getListings } from '../actions/listings';
import SquareImage from './SquareImage';
import OneLineText from './OneLineText';
import CategoryText from './CategoryText';
import SellerProfile from './SellerProfile';

const numColumns = 2;
const imageSize = Dimensions.get('window').width / 2 - styleConstants.spacing; // Half of window size with 5px horizontal padding

class ListingCards extends React.Component {
  state = {
    currentPage: 1,
  };

  onRefresh = () => {
    this.props.actions.getListings({
      size: this.state.currentPage * pageSize,
    });
  };

  componentDidMount() {
    this.props.actions.getListings({
      size: this.state.currentPage * pageSize,
    });
  }

  loadMore = () => {
    if (!this.onEndReachedCalledDuringMomentum) {
      this.setState(
        {
          currentPage: this.state.currentPage + 1,
        },
        () =>
          this.props.actions.getListings({
            size: this.state.currentPage * pageSize,
          }),
      );
      this.onEndReachedCalledDuringMomentum = true;
    }
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
    const { listings } = this.props;
    return (
      <>
        <FlatList
          ref={ref => {
            this.flatListRef = ref;
          }}
          style={styles.container}
          data={get(listings, 'list', [])}
          keyExtractor={item => item.id}
          renderItem={this.renderListingCard}
          numColumns={numColumns}
          refreshControl={
            <RefreshControl
              refreshing={get(listings, 'loading', false)}
              onRefresh={this.onRefresh}
            />
          }
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.5}
          onMomentumScrollBegin={() => {
            this.onEndReachedCalledDuringMomentum = false;
          }}
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

const mapStateToProps = (state, ownProps) => {
  return { listings: state.listings };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        getListings,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(ListingCards));
