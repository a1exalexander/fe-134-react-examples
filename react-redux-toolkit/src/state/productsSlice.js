import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [
    {
      id: 1,
      price: 100,
      title: "Product 1",
      count: 1,
    },
    {
      id: 2,
      price: 120,
      title: "Product 2",
      count: 1,
    },
  ],
};

export const productsSlice = createSlice({
  initialState,
  name: "products",
});

export const selectors = {
  getProducts: (state) => state.products.data,
};

export default productsSlice.reducer;
