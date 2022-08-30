import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

function BootNav() {
  return (
    <>
    {
      /**
       * navbar of the entire app
       * 
       */
    }
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/' id='brand'>
            Book-Away
          </Navbar.Brand>
          <Nav className='me-auto'></Nav>
          <Nav id='navItems'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/Wishlist'>Wish-List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BootNav;
