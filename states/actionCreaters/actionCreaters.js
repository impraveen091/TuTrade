// import * as actions from "../actionTypes/actionTypes";

// export const addCartItem = (product) => {
//   return (dispatch) => {
//     dispatch({ type: actions.CART_ADD, payload: product });
//   };
// };

// export const removeCartItem = (id) => {
//   return (dispatch) => {
//     dispatch({ type: actions.CART_REMOVE, payload: id });
//   };
// };

// export const increaseCartItemQuantity = (id) => {
//   return (dispatch) => {
//     dispatch({ type: actions.INCREASE_CART_ITEM_QUANTITY, payload: id });
//   };
// };

// export const decreaseCartItemQuantity = (id) => {
//   return (dispatch) => {
//     dispatch({ type: actions.DECREASE_CART_ITEM_QUANTITY, payload: id });
//   };
// };

// export const emptyCart = (type) => {
//   return (dispatch) => {
//     dispatch({ type: actions.EMPTY_CART, payload: type });
//   };
// };

import { createAction } from "@reduxjs/toolkit";
import {
CART_ADD,
CART_REMOVE,
INCREASE_CART_ITEM_QUANTITY,
DECREASE_CART_ITEM_QUANTITY,
EMPTY_CART,
FETCH_PRODUCTS,
} from "../actionTypes/actionTypes";

export const addCartItem = createAction(CART_ADD);
export const removeCartItem = createAction(CART_REMOVE);
export const increaseCartItemQuantity = createAction(
INCREASE_CART_ITEM_QUANTITY
);
export const decreaseCartItemQuantity = createAction(
DECREASE_CART_ITEM_QUANTITY
);
export const emptyCart = createAction(EMPTY_CART);
export const fetchproducts= createAction(FETCH_PRODUCTS);