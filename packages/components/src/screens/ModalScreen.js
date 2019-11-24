import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

class ModalScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri: navigation.getParam('photo'),
          }}
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
    maxHeight: '90%',
  },
});

export default withNavigation(ModalScreen);
