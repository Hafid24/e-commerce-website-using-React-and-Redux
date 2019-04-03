import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_CART
  } from '../actions/productActions';
  
  const initialState = {
    products: [],
    loading: false,
    error: null
  };
  
  export default function productReducer(state = initialState, action) {
    
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PRODUCTS_SUCCESS: 
      return {
          ...state,
          loading: false,
          products: action.payload.products
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
          
        };
      case ADD_CART:
      state.products.find(product => product.id === action.id).inCart = true;
      return {
        ...state,
        loading: false,
        error: null
      };
      default:

        return state;
    }
  }