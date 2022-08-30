import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";
function Vcard(props) {
  console.log(`"${props.iurl}"`);
  let source = "/images" + props.iurl;
  /**
   * vertical card component
   */
  return (
    <Card id='Vcard' style={{ width: "18rem" }}>
      <Card.Img variant='top' src={source} />
      <Card.ImgOverlay id='prizeHolder'>
        <div>{props.price}</div>
      </Card.ImgOverlay>
      <Card.Body id='Vbody'>
        <Card.Title>
          <b>{props.title ? props.title : "Holiday Inn"}</b>
        </Card.Title>
        <Card.Text>
          {props.location
            ? props.location
            : "Location ernakulam near kadavanatra adipoly biriyani vinayuak delwin joe in high resolution"}
        </Card.Text>
        <div className='Vbutton'>
          <Button id='cart' variant='dark'>
            book now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Vcard;
