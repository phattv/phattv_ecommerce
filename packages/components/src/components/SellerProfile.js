import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styleConstants } from '../constants';
import SquareImage from './SquareImage';

class SellerProfile extends React.Component {
  render() {
    const { seller = {}, size = 40 } = this.props;
    return (
      <TouchableOpacity
        style={{
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
        <Text>{seller.username}</Text>
      </TouchableOpacity>
    );
  }
}

export default SellerProfile;
