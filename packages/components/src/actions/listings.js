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

export const getListings = ({
  size,
  category_id,
  seller_id,
  sort_by,
  sort_order,
}) => {
  return dispatch => {
    dispatch({
      type: GET_LISTINGS_REQUEST,
      payload: {},
    });

    let url = `${BASE_URL}/listings?offset=0&limit=${size}`;
    if (category_id) {
      url += `&category_id=${category_id}`;
    }
    if (seller_id) {
      url += `&seller_id=${seller_id}`;
    }
    if (sort_by) {
      url += `&sort_by=${sort_by}`;
    }
    if (sort_order) {
      url += `&sort_order=${sort_order}`;
    }

    axios
      .get(url)
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
