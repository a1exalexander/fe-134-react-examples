import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  products: [],
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProduct(state, action) {
      const productIndex = state.products.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        state.products.splice(productIndex, 1, {
          ...product,
          count: product.count + 1,
        });
      } else {
        state.products.push(action.payload);
      }
    },
    removeProduct(state, action) {
      const productIndex = state.products.findIndex(
        ({ id }) => id === action.payload
      );
      const product = state.products[productIndex];
      if (productIndex !== -1 && product?.count > 1) {
        const product = state.products[productIndex];
        state.products.splice(productIndex, 1, {
          ...product,
          count: product.count - 1,
        });
      }
      if (productIndex !== -1 && product?.count <= 1) {
        state.products.splice(productIndex, 1);
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
