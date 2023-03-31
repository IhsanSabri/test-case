import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../services/CartSlicer";
import ProductReducer from "../services/ProductSlice";
import SearchReducer from "../services/ProductSearchSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    search: SearchReducer,
  },
});
