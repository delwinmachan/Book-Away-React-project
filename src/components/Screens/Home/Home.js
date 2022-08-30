import Container from "react-bootstrap/Container";
import BootNav from "../../navbar/navbar";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BCard from "../../card/card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { add, remove } from "../../../reducers/wishlist";
import { search } from "../../../reducers/hoteldata";
import { apiData } from "../../../api/index";
import Sidebar from "../../sidebar/side";
import Search from "../../Search/search";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /** 
   * getting Data for cards 
   */
  let data = useSelector((state) => state.hoteldata.Data);
  /**
   * wihslist data fetched to indicate wishlist items
   */
  let wishlist = useSelector((state) => state.wishlist.wishlist);
/**
 * refresh function to get new dataset from api
 */
  function refresh() {
    dispatch(apiData());
  }
/**
 * searchhandler function is used to filter data to be displayed.user can search by country and hotel name.
 */
  function searchHandler() {
    dispatch(search(document.getElementById("outlined-basic").value));
  }
  /**
   * if data is present it'll be returned or else no data present message will be shown to user
   */
  let Cards = "";
  if (data != "") {
    /**
     * populating cards component
     */
    Cards = data
      .filter((item, idx) => idx < 20)
      .map((item) => {
        const component = item;
        let wishlistToggle = false;
        /**
         * checking whether card item is in wishlist and changing variables to indicate that in the card
         */
        for (var i = 0; i < wishlist.length; i++) {
          if (wishlist[i].id === item.id) {
            wishlistToggle = true;
            break;
          } else {
            wishlistToggle = false;
          }
        }
        /**
         * if user presses somewhere in the card,it redirects them to next page
         */
        function clickHandler() {
          navigate("/product", { state: { component: component } });
        }
        /**
         * when user presses wishlist icon,item gets added to wishlist
         * @param {object} element 
         * @param {*event} e 
         */
        function wishlistHandler(element, e) {
          if (wishlist.find((ele) => ele.id === element.id)) {
            console.log("flase");
            dispatch(remove(element));
          } else {
            console.log(wishlist.find((ele) => ele.id === element.id));
            dispatch(add(element));
          }
          /**
           * to stop invoking clickHnadler function
           */
          e.stopPropagation();
        }
        return (
          <BCard
            key={item.id}
            title={item.name}
            location={item.country}
            prize={item.price}
            url={item.videourl}
            city={item.city}
            rating={item.stars}
            onClick={clickHandler}
            wishlist={wishlistToggle}
            addWish={(e) => wishlistHandler(item, e)}
          ></BCard>
        );
      });
  } else {
    Cards = (
      <div className='nodata'>
        <h4>NO DATA FOUND</h4>
      </div>
    );
  }
  return (
    <>
      <div className='mainContainer'>
        <BootNav />

        <Container id='homePage'>
          <Row id='nodataHolder'>
            <Col sm={4} id='sidebarContainer' className='side'>
              <Container className='p-3'>
                <Sidebar></Sidebar>
              </Container>
            </Col>
            <Col sm={8}>
              <div className='search'>
                <Search></Search>
                <SearchIcon
                  id='searchIcon'
                  onClick={searchHandler}
                ></SearchIcon>
                <RefreshIcon id='refreshIcon' onClick={refresh}></RefreshIcon>
              </div>
              {data ? Cards : "Loading"}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
