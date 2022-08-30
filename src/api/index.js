import axios from "./config";
import { createAsyncThunk } from "@reduxjs/toolkit";
/**
 * calling api and geting data.incvoked when refresh button in home page is clicked
 */
const apiData = createAsyncThunk("getreq", async (data) =>
  axios.get("/", data).then((res) => ({
    success: true,
    data: res.data,
    error: null,
  }))
);

export { apiData};
