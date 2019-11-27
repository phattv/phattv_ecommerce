import axios from 'axios';
import {
  GET_LISTINGS_REQUEST,
  GET_LISTINGS_SUCCESS,
  GET_LISTINGS_FAILURE,
  GET_LISTING_REQUEST,
  GET_LISTING_SUCCESS,
  GET_LISTING_FAILURE,
} from './index';
import { BASE_URL } from '../constants';

export const getListings = () => {
  return dispatch => {
    dispatch({
      type: GET_LISTINGS_REQUEST,
      payload: {},
    });

    axios
      .get(`${BASE_URL}/listings`)
      .then(response =>
        dispatch({
          type: GET_LISTINGS_SUCCESS,
          payload: response.data,
        }),
      )
      .catch(error =>
        dispatch({
          type: GET_LISTINGS_FAILURE,
          payload: error.response,
        }),
      );
  };
};

export const getListing = id => {
  return dispatch => {
    dispatch({
      type: GET_LISTING_REQUEST,
      payload: { id },
    });

    axios
      .get(`${BASE_URL}/listings/${id}`)
      .then(response =>
        dispatch({
          type: GET_LISTING_SUCCESS,
          payload: response.data,
        }),
      )
      .catch(error =>
        dispatch({
          type: GET_LISTING_FAILURE,
          payload: error.response,
        }),
      );
  };
};
