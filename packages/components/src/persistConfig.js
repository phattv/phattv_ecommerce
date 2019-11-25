import { AsyncStorage } from 'react-native';
import { reduxStoreId } from './constants';

export default {
  key: reduxStoreId,
  storage: AsyncStorage,
};
