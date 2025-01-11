import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/ApiURL";

import { STATUS } from "../utils/status";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
};

export const fetchAsyncCategories = createAsyncThunk(
  "categories/fetch",
  async (__dirname, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}product/categories`);
      if (!response.ok) {
        throw new error("Failed to fetch categories");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCategories.pending, (state) => {
        state.categoriesStatus = STATUS.LOADING;
      })

      .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = STATUS.SUCCEEDED;
      })

      .addCase(fetchAsyncCategories.rejected, (state, action) => {
        state.categoriesStatus = STATUS.FAILED;
        console.error("fetch Categories failed : ", action.error.message);
      });
  },
});

export const getAllCategories = (state) => state.category.categories;
export default categorySlice.reducer;
