import React from 'react';
import { TouchableOpacity } from 'react-native';
import { get } from 'lodash';

import { styleConstants } from '../constants';
import Text from './Text';

class CategoryText extends React.Component {
  render() {
    const { category, onPress } = this.props;
    return (
      <TouchableOpacity onPress={() => onPress && onPress(category)}>
        <Text style={[styleConstants.fonts.hyperlink, { fontSize: 12 }]}>
          in {get(category, 'name', '')}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CategoryText;
