import { configureStore } from "@reduxjs/toolkit";
import cartRuducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartRuducer,
  },
});
