import React from 'react';
import { View, Text, Button } from 'react-native';
import { routes } from '../constants';

class DetailsScreen extends React.Component {
  navigateToHomeScreen = () => {
    this.props.navigation.navigate(routes.Home);
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen yoyo</Text>
        <Button title="Go to home" onPress={this.navigateToHomeScreen} />
      </View>
    );
  }
}

export default DetailsScreen;
