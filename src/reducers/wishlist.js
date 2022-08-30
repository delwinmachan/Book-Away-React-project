import { createSlice } from "@reduxjs/toolkit";
const data = JSON.parse(localStorage.getItem("wishlist"));
/**
 * addition on removal of wishlist items are done in this reducer
 */
const initialState = {
  wishlist: data ? data : [],
};
export const wishlistSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {
    /**
     * addition of wishlist items
     * @param {*} state
     * @param {*} action
     */
    add: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    /**
     * removal of favourite list items
     *
     * @param {} state
     * @param {*} action
     */
    remove: (state, action) => {
      localStorage.removeItem("wishlist");
      const filteredArray = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishlist = filteredArray;

      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { add, remove } = wishlistSlice.actions;

export default wishlistSlice.reducer;
