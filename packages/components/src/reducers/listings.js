import {
  GET_LISTINGS_REQUEST,
  GET_LISTINGS_SUCCESS,
  GET_LISTINGS_FAILURE,
  GET_LISTING_REQUEST,
  GET_LISTING_SUCCESS,
  GET_LISTING_FAILURE,
} from '../actions';

const initialState = {
  isLoading: false,
  error: null,
  list: [],
  details: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS_REQUEST:
    case GET_LISTING_REQUEST:
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
    case GET_LISTING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: {},
        details: action.payload,
      };
    case GET_LISTINGS_FAILURE:
    case GET_LISTING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
