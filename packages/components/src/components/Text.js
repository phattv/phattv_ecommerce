import React from 'react';
import { Text } from 'react-native';

class CustomText extends React.Component {
  render() {
    const styleProp = this.props.style;
    let componentStyle = { color: 'black' };
    if (Array.isArray(styleProp)) {
      styleProp.map(
        styleObject =>
          (componentStyle = Object.assign({}, componentStyle, styleObject)),
      );
    } else {
      componentStyle = Object.assign({}, componentStyle, styleProp);
    }

    return <Text style={componentStyle}>{this.props.children}</Text>;
  }
}

export default CustomText;
