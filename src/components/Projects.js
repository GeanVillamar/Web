import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Administrador de usuarios</Card.Title>
        <Card.Text>Panel de usuarios hecho con python y Django</Card.Text>
        <Button variant="primary">Ir</Button>
      </Card.Body>
    </Card>
  );
}

export default Projects;
