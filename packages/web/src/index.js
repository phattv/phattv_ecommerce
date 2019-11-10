import { AppRegistry } from 'react-native';

import App from 'components/src/App';

AppRegistry.registerComponent('phattv_ecommerce', () => App);
AppRegistry.runApplication('phattv_ecommerce', {
  rootTag: document.getElementById('root'),
});
