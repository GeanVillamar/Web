import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";

function Projects() {
  return (
    <Fade direction="left" cascade>
      <div className="container container_projects">
        <div className="container AdminUser">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="imagen/admin_user.jpg" />
            <Card.Body>
              <Card.Title>Administrador de usuarios</Card.Title>
              <Card.Text> python y Django</Card.Text>
              <Button variant="primary">Ir</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="container TodoList">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Lista de Tareas</Card.Title>
              <Card.Text>Aplicacion web con react y node.js</Card.Text>
              <Button variant="primary">Ir</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="container CarShopping">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>
                <Bounce>Carro de Compras</Bounce>
              </Card.Title>
              <Card.Text>Aplicacion web con react y node.js</Card.Text>
              <Button variant="primary">Ir</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Fade>
  );
}

export default Projects;
