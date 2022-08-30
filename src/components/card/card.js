import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import "./Card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import Button from "react-bootstrap/Button";
function Bcard(props) {
  const videoEl = useRef(null);
  /**
   * function to play videos
   */
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  /**
   * attempPplay function is only invoked first.hence place inside useEffect with empty condition aray
   */
  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
    {
      /**
       * props.details is used to switch between card css
       */
    }
      <Card
        id={props.details ? "detailsHcard" : "hcard"}
        className={props.details ? "detailsHcard" : "hcard"}
        onClick={props.onClick}
      >
        <div className='CardWrapper'>
          <div className='FavIcon'>
            {
              /**
               * props.buttonIcon is used to switch between book button and FavouriteBorderIcon
               */
            }
            {props.buttonIcon ? (
              <Button variant='dark'>book now</Button>
            ) : (
              <FavoriteBorderIcon
                className={props.wishlist ? "Heart" : "NoHeart"}
                onClick={props.addWish}
                sx={{ fontSize: 33 }}
              ></FavoriteBorderIcon>
            )}
          </div>
          <div className='HcardContainer'>
            <Card.Body className='Hbody'>
              <Card.Title bsPrefix='Htitle'>
                {props.title ? props.title : "Holiday Inn"}
              </Card.Title>

              <ul className='Hlist'>
                <li>
                  <Card.Text>
                    {props.location
                      ? `${props.location},${props.city}`
                      : "Location ernakulam near kadavanatra adipoly biriyani vinayuak delwin joe in high resolution"}
                  </Card.Text>
                </li>
                {props.description && (
                  <li>
                    <Card.Text>
                      {props.description
                        ? `${props.description}`
                        : "Description"}
                    </Card.Text>
                  </li>
                )}
                <li>
                  <Card.Text>
                    {props.prize ? `prize:${props.prize}$` : "prize:400$"}
                  </Card.Text>
                </li>
                <li>
                  <Card.Text id='rating'>
                    Rating:
                    {<Rating name='read-only' value={props.rating} readOnly />}
                  </Card.Text>
                </li>
              </ul>

              {/* <Button variant='dark' className='button'>
            Go somewhere
          </Button> */}
            </Card.Body>

            <div className='Hvideo_holder'>
              <video
                className='Hvideo__container'
                playsInline
                autoPlay
                loop
                muted
                controls
                alt='All the devices'
                src={props.url}
                ref={videoEl}
              ></video>
            </div>
          </div>
        </div>
      </Card>
      {
              /**
               * border element.accepts hidden prop which will make the border disappear if true
               */
            }
      <div className={`Hborder ${props.hidden}`}></div>
    </>
  );
}

export default Bcard;
