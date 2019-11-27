import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import { get } from 'lodash';

import Carousel from '../components/Carousel';
import SquareImage from '../components/SquareImage';
import { routes, styleConstants } from '../constants';
import { getListing } from '../actions/listings';
import { TouchableOpacity } from 'react-native-gesture-handler';

const sellerImageSize = 80;
class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: routes.Details,
  };

  componentDidMount() {
    this.props.actions.getListing(this.props.navigation.getParam('id'));
  }

  render() {
    const { listings } = this.props;
    const listing = listings.details;
    return (
      <ScrollView style={styles.container}>
        <Carousel photos={get(listing, 'photos', [])} />
        <View style={styles.textContainer}>
          <Text style={styleConstants.fonts.headerNotBold}>
            {listing.title}
          </Text>
          <Text style={styleConstants.fonts.header}>S${listing.price}</Text>
          <TouchableOpacity>
            <Text
              style={[
                styleConstants.paddingTop,
                styleConstants.fonts.hyperlink,
              ]}
            >
              in {get(listing, 'category.name', '')}
            </Text>
          </TouchableOpacity>
          <Text style={styleConstants.paddingTop}>{listing.description}</Text>

          <Text
            style={[styleConstants.fonts.headerTwo, styleConstants.paddingTop]}
          >
            Seller Information
          </Text>
          <TouchableOpacity style={styles.sellerInfo}>
            <SquareImage
              size={sellerImageSize}
              uri={get(listing, 'seller.image_url', '')}
              style={{ marginRight: styleConstants.spacing }}
            />
            <Text>{get(listing, 'seller.username', '')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
});

const mapStateToProps = (state, ownProps) => {
  return { listings: state.listings };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        getListing,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(DetailsScreen));
