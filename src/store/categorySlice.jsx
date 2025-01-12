import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/ApiURL";

import { STATUS } from "../utils/status";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  CategoriesProducts: [],
  CategoriesProductsStatus: STATUS.IDLE,
};

export const fetchAsyncCategories = createAsyncThunk(
  "categories/fetch",
  async (__, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}product/categories`);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAsyncProductsOfCategories = createAsyncThunk(
  "category-products/fetch",
  async (category, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}products/category/${category}`);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
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
      })
      .addCase(fetchAsyncProductsOfCategories.pending, (state) => {
        state.CategoriesProductsStatus = STATUS.LOADING;
      })

      .addCase(fetchAsyncProductsOfCategories.fulfilled, (state, action) => {
        state.CategoriesProducts = action.payload;
        state.CategoriesProductsStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchAsyncProductsOfCategories.rejected, (state) => {
        state.CategoriesProductsStatus = STATUS.FAILED;
      });
  },
});

export const getAllCategories = (state) => state.category.categories;
export const getAllProductsByCategory = (state) =>
  state.category.CategoriesProducts;
export const getCategoryProductsStatus = (state) =>
  state.category.CategoriesProductsStatus;
export default categorySlice.reducer;
