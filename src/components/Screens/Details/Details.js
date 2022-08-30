import Container from "react-bootstrap/Container";

import BootNav from "../../navbar/navbar";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BCard from "../../card/card";
import Vcard from "../../VerticalCard/VCard";

import CardGroup from "react-bootstrap/CardGroup";
import { useLocation } from "react-router-dom";
import "./details.css";

const ProductAdspace = () => {
  const location = useLocation();
  /**
   * dummy data for vertical cards
   */
  const data = [
    {
      title: "Single Economy",
      brand: "Nike",
      url: "https://media.istockphoto.com/videos/loving-senior-couple-relaxing-at-lakeshore-video-id1305756813",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      prize: "Rs. 3569",
      imageurl: "/room-1.jpeg",

      id: "nk-465",
    },
    {
      title: "Single Basic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      url: "https://media.istockphoto.com/videos/people-wearing-masks-walking-on-zebra-crossing-video-id1287658775",
      prize: "Rs. 1899",
      imageurl: "/room-3.jpeg",
      id: "nk-w45",
    },
    {
      title: "double Basic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://media.istockphoto.com/videos/crowd-video-id145754478",
      prize: "Rs. 3169",
      imageurl: "/room-4.jpeg",

      id: "ad-361",
    },
    {
      title: "Double Economy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://media.istockphoto.com/videos/happy-people-partying-on-rooftop-terrace-in-summer-video-id1331153184",
      prize: "Rs. 10469",
      imageurl: "/room-2.jpeg",

      id: "nk-a11",
    },
    {
      title: "Double Standard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://media.istockphoto.com/videos/crowded-street-in-old-delhi-video-id890946330",
      prize: "Rs. 4199",
      imageurl: "/room-5.jpeg",

      id: "pu-evo1",
    },
    {
      title: "Double Deluxe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://media.istockphoto.com/videos/4k-video-footage-of-a-young-businesswoman-holding-her-laptop-while-a-video-id1347162924",
      prize: "Rs. 1969",
      imageurl: "/room-6.jpeg",

      id: "nk-hv4",
    },
  ];
  return (
    <>
      <BootNav />
      <Container>
        <Row>
          <Col sm={12}>
            {/**
             * buttonIcon prop is to toggle between favourite icon and book button
             * details prop is to toggle between card css of home and details css
             */}
            <BCard
              key={location.state.component.id}
              title={location.state.component.name}
              location={location.state.component.country}
              prize={location.state.component.price}
              url={location.state.component.videourl}
              details={true}
              buttonIcon={true}
              city={location.state.component.city}
              description={location.state.component.description}
              rating={location.state.component.stars}
              hidden='hidden'
            ></BCard>
            {/**
             * card group is to display vertical cards with information regarding hotel room
             */}
            <CardGroup id='cardgroup'>
              <Row md={2} lg={3} sm={12} xs={12} className='g-4'>
                {data.map((item) => (
                  <Col id='col' key={item.id}>
                    <Vcard
                      title={item.title}
                      location={item.description}
                      price={item.prize}
                      iurl={item.imageurl}
                    ></Vcard>
                  </Col>
                ))}
              </Row>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductAdspace;
