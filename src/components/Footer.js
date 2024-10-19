import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Acerca de</h5>
            <p>Proyectos realizados almacenados en GitHub</p>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <p>Puedes contactarme en las siguientes redes sociales.</p>
            <Nav className="flex-column">
              <Nav.Link href="#facebook" className="text-light">
                Linkenlin
              </Nav.Link>
              <Nav.Link href="#twitter" className="text-light">
                GitHub
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <p>
            &copy; {new Date().getFullYear()} Gean Villamar. Todos los derechos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
