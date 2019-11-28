import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styleConstants } from '../constants';

class CategoryText extends React.Component {
  render() {
    const { category = {} } = this.props;
    return (
      <TouchableOpacity>
        <Text style={[styleConstants.fonts.hyperlink, { fontSize: 12 }]}>
          in {category.name}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CategoryText;
