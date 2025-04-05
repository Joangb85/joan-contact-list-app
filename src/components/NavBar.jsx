import { Nav, Container, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";


export const NavBar = () => {

  const navigate = useNavigate();

  return (
      <Navbar sticky="top" bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <Button variant="black" style={{ color: "#149eca", fontSize: "1.5rem" }}>Homepage</Button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/Agenda")}>
                <Button variant="black" style={{ color: "#149eca", fontSize: "1.5rem" }}>Agendas</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};