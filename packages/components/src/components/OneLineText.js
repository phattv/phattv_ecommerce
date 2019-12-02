import React from 'react';
import { Text } from 'react-native';

class OneLineText extends React.Component {
  render() {
    return (
      <Text style={[{ color: 'black' }, this.props.style]} numberOfLines={1}>
        {this.props.text}
      </Text>
    );
  }
}

export default OneLineText;
