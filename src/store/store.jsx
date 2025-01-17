import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice.jsx";
import wishlistReducer from "./wishListSlice.jsx";
const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    search: searchReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
