import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-web-swiper';

import { routes } from '../constants';

class Carousel extends React.Component {
  showFullSreenImage = photo => {
    this.props.navigation.navigate(routes.Modal, { photo });
  };

  render() {
    const { photos } = this.props;
    return (
      <View style={styles.container}>
        <Swiper loop timeout={3}>
          {photos.map((photo, index) => (
            <TouchableOpacity
              onPress={() => this.showFullSreenImage(photo)}
              key={index}
            >
              <View style={styles.slideContainer}>
                <Image
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: sliderHeight,
                  }}
                  source={{
                    uri: photo,
                  }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </Swiper>
      </View>
    );
  }
}

const sliderHeight = 300;
const styles = StyleSheet.create({
  container: {
    height: sliderHeight,
  },
  slideContainer: {
    height: sliderHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withNavigation(Carousel);
