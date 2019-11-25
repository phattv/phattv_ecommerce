import AsyncStorage from '@react-native-community/async-storage';
import { reduxStoreId } from './constants';

export default {
  key: reduxStoreId,
  storage: AsyncStorage,
};
