import { createSlice } from "@reduxjs/toolkit";
import { apiData } from "../api/index";
/**
 * getting data about hotels from local storage
 */
const data = JSON.parse(localStorage.getItem("Hotels"));
/**
 * setting up filterArray because performing filter operations  on data directly might lead to lose of data eventually
 */
const filterArray = JSON.parse(localStorage.getItem("Hotels"));
/**
 * setting intialstates
 */
const initialState = {
  Data: data?data:[],
  price: [100, 1000],
  rating: 4,
  search: "",
  videourls: [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
    "/videos/video5.mp4",
    "/videos/video6.mp4",
  ],
};
export const HotelData = createSlice({
  name: "url",
  initialState,
  reducers: {
    /**
     * slider reducer is to deal with changes in price slider
     * rating reducer is to deal with changes in rating bar
     * search reducer is to deal with search queries made by user
     * filter condition  "if (
          item.price > state.price[0] &&
          item.price < state.price[1] &&
          item.stars >= state.rating &&
          (item.country.toLowerCase().includes(state.search.toLowerCase()) ||
            item.name.toLowerCase().includes(state.search.toLowerCase()))
        ) " 
        This condition is used check all filter condition set by user at that point.
     * 
     */
    slider: (state, action) => {
      state.price = action.payload;
      state.Data = filterArray.filter((item) => {
        if (
          item.price > state.price[0] &&
          item.price < state.price[1] &&
          item.stars >= state.rating &&
          (item.country.toLowerCase().includes(state.search.toLowerCase()) ||
            item.name.toLowerCase().includes(state.search.toLowerCase()))
        ) {
          return item;
        }
      });
    },
    rating: (state, action) => {
      state.rating = action.payload;

      state.Data = filterArray.filter((item) => {
        if (
          item.price > state.price[0] &&
          item.price < state.price[1] &&
          item.stars >= state.rating &&
          (item.country.toLowerCase().includes(state.search.toLowerCase()) ||
            item.name.toLowerCase().includes(state.search.toLowerCase()))
        ) {
          return item;
        }
      });
    },
    search: (state, action) => {
      state.search = action.payload.toLowerCase();
      state.Data = filterArray.filter((item) => {
        if (
          item.price > state.price[0] &&
          item.price < state.price[1] &&
          item.stars >= state.rating &&
          (item.country.toLowerCase().includes(state.search.toLowerCase()) ||
            item.name.toLowerCase().includes(state.search.toLowerCase()))
        ) {
          return item;
        }
      });
    },
  },
  extraReducers: (builder) => {
    /**
     * when apiData is fetched,random videourls are added to the given dataset from videourls state,to make new data set
     */
    builder.addCase(apiData.fulfilled, (state, action) => {
      state.Data = action.payload.data;
      state.Data = state.Data.map((item) => {
        let tempData = {
          ...item,
          videourl:
            state.videourls[
              Math.floor(Math.random() * (state.videourls.length - 1))
            ],
          wishlist: false,
        };
        return tempData;
      });
      localStorage.removeItem("Hotels");
      /**
       * wishlist is removed when new data is fetchde
       */
      localStorage.removeItem("wishlist");
      localStorage.setItem("Hotels", JSON.stringify(state.Data));
    });
    builder.addCase(apiData.pending, (state, action) => {
      console.log("pending");
    });
    builder.addCase(apiData.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});
export const { slider, rating, search } = HotelData.actions;
export default HotelData.reducer;
