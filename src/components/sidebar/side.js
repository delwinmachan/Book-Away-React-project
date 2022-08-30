import * as React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import RangeSlider from "../RangeSlider/slider";
import Rating from "@mui/material/Rating";
import { rating } from "../../reducers/hoteldata";
import { useDispatch, useSelector } from "react-redux";
import "./sidebar.css";

function Sidebar() {
  const dispatch = useDispatch();
  /**
   * subsribing redux store to get values and updating components accordingly
   */
  let countrydata = useSelector((state) => state.hoteldata.Data);
  const ratingValue = useSelector((state) => state.hoteldata.rating);
  return (
    <Card id='homeSidebar' style={{ width: "100%" }}>
      <Card.Header>
        <h6>
          <b>Price</b>
        </h6>
      </Card.Header>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <RangeSlider></RangeSlider>
        </ListGroup.Item>
        <Card.Header>
          <h6>
            <b>Rating</b>
          </h6>
        </Card.Header>
        <ListGroup.Item>
          {/**
           * each time user changes rating value is sent to wishlist reducer
           */}
          <Rating
            name='simple-controlled'
            value={ratingValue}
            onChange={(event, newValue) => {
              dispatch(rating(newValue));
            }}
          />
        </ListGroup.Item>
        <Card.Header id="headerSmallScreen">
          <h6>
            <b>Country</b>
          </h6>
        </Card.Header>
        {
          /**
           * displaying the countries of hotels that is being displayed right now
           */
        }
        {countrydata
          .filter((item, idx) => idx < 100)
          .map((item) => (
            <ListGroup.Item id='smallScreen' key={item.id}>
              {item.country}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Card>
  );
}

export default Sidebar;
