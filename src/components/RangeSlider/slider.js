import * as React from "react";

import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { slider } from "../../reducers/hoteldata";

export default function RangeSlider() {
  let price = useSelector((state) => state.hoteldata.price);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    dispatch(slider(newValue));
  };

  return (
    <Slider
      value={price}
      onChange={handleChange}
      valueLabelDisplay='auto'
      max={1000}
      min={100}
    />
  );
}
