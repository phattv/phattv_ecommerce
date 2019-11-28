import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Swiper from 'react-native-web-swiper';

import { routes } from '../constants';

class Carousel extends React.Component {
  state = {
    startSwiper: false,
  };

  showFullSreenImage = photo => {
    this.props.navigation.navigate(routes.Modal, { photo });
  };

  componentWillMount() {
    // to fix swiper loads last listing's images
    setTimeout(() => {
      this.setState({ startSwiper: true });
    }, 500);
  }

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    const { photos } = this.props;
    const { startSwiper } = this.state;

    return (
      <View style={styles.container}>
        {startSwiper && (
          <Swiper loop>
            {photos.map((photo, index) => (
              <TouchableWithoutFeedback
                onPress={() => this.showFullSreenImage(photo)}
                key={index}
              >
                <View style={styles.slideContainer}>
                  <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={{
                      uri: photo,
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            ))}
          </Swiper>
        )}
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
  image: {
    width: '100%',
    height: sliderHeight,
  },
});

export default withNavigation(Carousel);
