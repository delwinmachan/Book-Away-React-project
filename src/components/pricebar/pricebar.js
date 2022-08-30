import * as React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./pricebar.css";
function Pricebar() {
  /**
   * This component is used to display price of the booking
   */
  return (
    <>
      <Card id='pricebar' style={{ width: "100%" }}>
        <Card.Header>
          <h6>
            <b>Price Break-Up</b>
          </h6>
        </Card.Header>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h6>1 Room x 1 Night: 566$</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>Discount: 56$</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>Price adter Discount: 506$</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>Total Amount: 506$</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button id='cart' variant='dark'>
              Book Now
            </Button>{" "}
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card id='pricebar' style={{ width: "100%" }}>
        <Card.Header>
          <h6>
            <b>Deal Codes</b>
          </h6>
        </Card.Header>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h6>MMTBESTBUY: ₹ 584</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>MMTMBK ₹ 783</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>SSMBK ₹ 783</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>FFMBK ₹ 783$</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button id='cart' variant='dark'>
              Apply Codes
            </Button>{" "}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default Pricebar;
