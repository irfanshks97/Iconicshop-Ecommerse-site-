import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state));
      }
    },
    removeFromWishList: (state, action) => {
      const updatedState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(updatedState));
      return updatedState;
    },
    clearWishList: () => {
      localStorage.removeItem("wishlist");
      return [];
    },
  },
});

export const { addToWishList, removeFromWishList, clearWishList } =
  wishListSlice.actions;

export const getWishListItems = (state) => state.wishlist;
export default wishListSlice.reducer;
