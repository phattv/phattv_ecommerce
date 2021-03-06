import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import { get } from 'lodash';

import { routes, styleConstants } from '../constants';
import { getListing } from '../actions/listings';
import Carousel from '../components/Carousel';
import CategoryText from '../components/CategoryText';
import SellerProfile from '../components/SellerProfile';
import Text from '../components/Text';

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
          <View style={styleConstants.paddingTop}>
            <CategoryText category={get(listing, 'category', {})} />
          </View>
          <Text style={styleConstants.paddingTop}>{listing.description}</Text>

          <Text
            style={[styleConstants.fonts.headerTwo, styleConstants.paddingTop]}
          >
            Seller Information
          </Text>
          <SellerProfile
            seller={get(listing, 'seller', {})}
            size={sellerImageSize}
          />
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
