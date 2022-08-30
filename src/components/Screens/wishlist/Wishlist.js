import Container from "react-bootstrap/Container";
import BootNav from "../../navbar/navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BCard from "../../card/card";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./wishlist.css";
import Pricebar from "../../pricebar/pricebar";

const Wishlist = () => {
  /**
   * wishlistiems are fetched
   */
  const wishListItems = useSelector((state) => state.wishlist.wishlist);

  return (
    <>
      <BootNav />
      <Container>
        <Row>
          <Col sm={8}>
            {/**
             * wishlist items being displayed
             */}
            {wishListItems
              ? wishListItems.map((item) => (
                  <BCard
                    key={item.id}
                    title={item.name}
                    location={item.country}
                    city={item.city}
                    buttonIcon={true}
                    rating={item.stars}
                    url={item.videourl}
                  ></BCard>
                ))
              : "NoData"}
          </Col>
          {/**
           * pricebar being fetched
           */}
          <Col sm={4} id='sidebarContainer' className='side'>
            <Container className='p-3'>
              <Pricebar></Pricebar>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Wishlist;
