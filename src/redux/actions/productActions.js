import { ActionTypes } from "../constants/action-types";
// ACTION FOR SET PRODUCT
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
//Action for SELECTED_PRODUCT
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
// Action for REMOVE_SELECTED_PRODUCT
export const removeSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    
  };
};