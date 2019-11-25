import storage from 'redux-persist/lib/storage';
import { reduxStoreId } from './constants';

export default {
  key: reduxStoreId,
  storage,
};
