import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { routes, styleConstants } from '../constants';
import ListingCards from '../components/ListingCards';
import { getListings } from '../actions/listings';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: routes.Home,
  };

  componentDidMount() {
    this.props.actions.getListings();
  }

  render() {
    const { listings } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Welcome to phattv's ecommerce</Text>
        <ListingCards listings={listings.list} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { textAlign: 'center', ...styleConstants.fonts.header },
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
