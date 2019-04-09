import axios from 'axios'
import {storeProducts} from '../data'

export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const ADD_CART = 'ADD_CART'
export const NOTHING = 'NOTHING'
export const REMOVE_CART = 'REMOVE_CART'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CLEAR_CART = 'CLEAR_CART'


/*export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return axios.get("/products")
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json.products));
          return json.products;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }
  */
 export function fetchProducts() {
    return dispatch => {
    dispatch(fetchProductsSuccess(storeProducts));
    return storeProducts;       
    };
  }


export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});