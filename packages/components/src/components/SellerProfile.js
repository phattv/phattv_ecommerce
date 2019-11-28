import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { styleConstants } from '../constants';
import SquareImage from './SquareImage';
import OneLineText from './OneLineText';

class SellerProfile extends React.Component {
  render() {
    const { seller = {}, size = 40 } = this.props;
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          ...styleConstants.paddingTop,
        }}
      >
        <SquareImage
          size={size}
          uri={seller.image_url}
          style={{ marginRight: styleConstants.spacing }}
        />
        <View style={{ overflow: 'hidden' }}>
          <Text style={styleConstants.fonts.hyperlink}>{seller.username}</Text>
          <OneLineText style={{ paddingRight: 50 }} text={seller.bio} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default SellerProfile;
