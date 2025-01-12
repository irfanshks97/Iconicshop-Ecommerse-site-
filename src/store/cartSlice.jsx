import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem("cart");
    const parsedCart = JSON.parse(cart);
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemsCount: 0,
  totalAmount: 0,
  isCartMessageOn: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity, price } = action.payload;
      const existingItem = state.carts.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.quantity * price;
      } else {
        state.carts.push({
          ...action.payload,
          totalPrice: quantity * price,
        });
      }

      // Recalculate totalAmount and itemsCount immediately
      state.totalAmount = state.carts.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      state.itemsCount = state.carts.reduce(
        (count, item) => count + item.quantity,
        0
      );

      storeInLocalStorage(state.carts);
    },

    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
      state.totalAmount = state.carts.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      state.itemsCount = state.carts.reduce(
        (count, item) => count + item.quantity,
        0
      );

      storeInLocalStorage(state.carts);
    },

    clearCart: (state) => {
      (state.carts = []), (state.totalAmount = 0), (state.itemsCount = 0);
      storeInLocalStorage(state.carts);
    },

    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      state.itemsCount = state.carts.reduce(
        (count, item) => count + item.quantity,
        0
      );
    },

    toggleCartQty: (state, action) => {
      const { id, type } = action.payload;
      const item = state.carts.find((item) => item.id === id);

      if (item) {
        if (type === "INC" && item.quantity < item.stock) {
          item.quantity++;
        } else if (type === "DEC" && item.quantity > 1) {
          item.quantity--;
        }
        item.totalPrice = item.quantity * item.price;
      }

      storeInLocalStorage(state.carts);
    },

    setCartMessageOn: (state) => {
      state.isCartMessageOn = true;
    },
    setCartMessageOff: (state) => {
      state.isCartMessageOn = false;
    },
  },
});

export const {
  addToCart,
  setCartMessageOff,
  setCartMessageOn,
  getCartTotal,
  toggleCartQty,
  clearCart,
  removeFromCart,
} = cartSlice.actions;

export const getAllCarts = (state) => state.cart?.carts || [];
export const getCartItemsCount = (state) => state.cart?.itemsCount || 0;
export const getCartTotalAmount = (state) => state.cart?.totalAmount || 0;
export const getCartMessageStatus = (state) =>
  state.cart?.isCartMessageOn || false;

export default cartSlice.reducer;
