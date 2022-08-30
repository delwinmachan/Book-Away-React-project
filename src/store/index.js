import { configureStore } from "@reduxjs/toolkit";
import HotelDataReducer from "../reducers/hoteldata";
import wishlistReducer from "../reducers/wishlist";
/**
 * redux store
 */
export const store = configureStore({
  reducer: {
    hoteldata: HotelDataReducer,
    wishlist: wishlistReducer,
  },
});
