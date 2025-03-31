import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    notification: null,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.items[payload] = (state.items[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state.items[payload]) return;

      state.items[payload] = state.items[payload] - 1;

      if (state.items[payload] <= 0) {
        delete state.items[payload];
      }
    },
    deleteCartEntry: (state, { payload }) => {
      delete state.items[payload];
    },
    showNotification: (state, { payload }) => {
      state.notification = payload;
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => {
  return Object.keys(cart.items).reduce((acc, id) => {
    acc.push({ id, amount: cart.items[id] });
    return acc;
  }, []);
});

export const selectCartItemAmountById = (state, id) => state.cart.items[id];
export const selectNotification = (state) => state.cart.notification;

export const {
  addToCart,
  removeFromCart,
  deleteCartEntry,
  showNotification,
  clearCart,
} = cartSlice.actions;
