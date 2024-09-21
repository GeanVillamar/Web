import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navegador() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Portafolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Sobre mi</Nav.Link>
            <Nav.Link href="#features">Proyectos</Nav.Link>
            <Nav.Link href="#pricing">contactos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegador;
