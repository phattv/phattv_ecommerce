import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { routes, styleConstants } from '../constants';
import { getListings } from '../actions/listings';
import ListingCards from '../components/ListingCards';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: routes.Home,
  };

  componentDidMount() {
    this.props.actions.getListings();
  }

  render() {
    const { listings, actions = {} } = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styleConstants.fonts.header, styles.textCenter]}>
          Welcome to phattv's ecommerce
        </Text>
        <Text style={styles.textCenter}>Pull to refresh</Text>
        <ListingCards
          listings={listings.list}
          getListings={actions.getListings}
          refreshing={listings.loading}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
