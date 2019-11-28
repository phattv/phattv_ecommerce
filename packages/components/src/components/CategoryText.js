import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { get } from 'lodash';

import { styleConstants } from '../constants';

class CategoryText extends React.Component {
  render() {
    const { category, onPress } = this.props;
    return (
      <TouchableOpacity onPress={() => onPress(category)}>
        <Text style={[styleConstants.fonts.hyperlink, { fontSize: 12 }]}>
          in {get(category, 'name', '')}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CategoryText;
