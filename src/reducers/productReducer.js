import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_CART,
    NOTHING
  } from '../actions/productActions';
  
  const initialState = {
    products: [],
    loading: false,
    error: null,
    cart: [],
  };
  
  export default function productReducer(state = initialState, action) {
    
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:
        return {
          ...state,
          cart: [],
          loading: true,
          error: null
        };
  
      case FETCH_PRODUCTS_SUCCESS: 
      return {
          ...state,
          cart: [],
          loading: false,
          products: action.payload.products
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
          
        };
        case NOTHING:
        return {
          ...state,
          loading: false,
          error:null
        };
      case ADD_CART:
      if(state.products.find(product => product.id === action.id).inCart === false){
      state.products.find(product => product.id === action.id).inCart = true;
      state.cart.push(state.products.find(product => product.id === action.id));
      }
      
     //state.cart.push("hh");
      return {
        ...state,
        loading: false,
        error: null
      };
      default:

        return state;
    }
  }