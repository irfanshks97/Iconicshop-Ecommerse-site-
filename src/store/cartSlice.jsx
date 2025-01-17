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

const calculateTotals = (carts) => {
  const totalAmount = carts.reduce((total, item) => total + item.totalPrice, 0);
  const itemsCount = carts.reduce((count, item) => count + item.quantity, 0);
  return { totalAmount, itemsCount };
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
      const totals = calculateTotals(state.carts);
      state.totalAmount = totals.totalAmount;
      state.itemsCount = totals.itemsCount;
      storeInLocalStorage(state.carts);
    },

    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);

      const totals = calculateTotals(state.carts);
      state.totalAmount = totals.totalAmount;
      state.itemsCount = totals.itemsCount;

      storeInLocalStorage(state.carts);
    },

    clearCart: (state) => {
      (state.carts = []), (state.totalAmount = 0), (state.itemsCount = 0);
      storeInLocalStorage(state.carts);
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

      const totals = calculateTotals(state.carts);
      state.totalAmount = totals.totalAmount;
      state.itemsCount = totals.itemsCount;

      storeInLocalStorage(state.carts);
    },

    getCartTotal: (state) => {
      const totals = calculateTotals(state.carts);
      state.totalAmount = totals.totalAmount;
      state.itemsCount = totals.itemsCount;
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
  removeFromCart,
  clearCart,
  toggleCartQty,
  getCartTotal,
  setCartMessageOn,
  setCartMessageOff,
} = cartSlice.actions;

// Selectors
export const getAllCarts = (state) => state.cart?.carts || [];
export const getCartItemsCount = (state) => state.cart?.itemsCount || 0;
export const getCartTotalAmount = (state) => state.cart?.totalAmount || 0;
export const getCartMessageStatus = (state) =>
  state.cart?.isCartMessageOn || false;

export default cartSlice.reducer;
