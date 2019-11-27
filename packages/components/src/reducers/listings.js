import {
  GET_LISTINGS_REQUEST,
  GET_LISTINGS_SUCCESS,
  GET_LISTINGS_FAILURE,
} from '../actions';

import { listings } from '../api/listings';

const initialState = {
  loading: false,
  error: null,
  list: listings,
  details: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LISTINGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: {},
        list: action.payload,
      };
    case GET_LISTINGS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
