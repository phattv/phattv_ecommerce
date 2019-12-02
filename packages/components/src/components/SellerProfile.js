import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { get } from 'lodash';

import { styleConstants } from '../constants';
import SquareImage from './SquareImage';
import OneLineText from './OneLineText';
import Text from './Text';

class SellerProfile extends React.Component {
  render() {
    const { seller, size = 40, onPress } = this.props;
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: styleConstants.spacing / 2,
        }}
        onPress={() => onPress && onPress(seller)}
      >
        <SquareImage
          size={size}
          uri={get(seller, 'image_url', '')}
          style={{ marginRight: styleConstants.spacing }}
        />
        <View style={{ overflow: 'hidden' }}>
          <Text style={styleConstants.fonts.hyperlink}>
            {get(seller, 'username', '')}
          </Text>
          <OneLineText
            style={{ paddingRight: 50 }}
            text={get(seller, 'bio', '')}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default SellerProfile;
