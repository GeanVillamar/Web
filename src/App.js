import "./App.css";
import Navegador from "./components/Navegador";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
      <div className="container barra-navegador">
        <Navegador />
      </div>
      <div className="container profile">
        <Profile
          cargo="Ingeniero de Software"
          nombre="Ing.Gean Villamar"
          texto="Desarrollador de aplicaciones web, conocimientos en conceptos de backend
            y frond end, bases de datos SQL"
        />
      </div>
      <div className="container projects">
        <Fade cascade>
          <h4>Projectos de desarrollo</h4>
        </Fade>
        <Projects />
      </div>
      <div className="container footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
