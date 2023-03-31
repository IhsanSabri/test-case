import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../constants/Status";
const base_url = "https://5fc9346b2af77700165ae514.mockapi.io";

const initialState = {
  status: "",
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
    const data = await axios.get(`${base_url}/products`).then((res) => res.data);
    return data;
});


export default productSlice.reducer;
