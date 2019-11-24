import React from 'react';
import { Image } from 'react-native';

class SquareImage extends React.Component {
  render() {
    return (
      <Image
        resizeMode="cover"
        style={{
          width: this.props.size,
          height: this.props.size,
          borderRadius: this.props.borderRadius ? this.props.borderRadius : 0,
          ...this.props.style,
        }}
        source={{
          uri: this.props.uri,
        }}
      />
    );
  }
}

export default SquareImage;
