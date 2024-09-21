import React from "react";

function Profile(props) {
  return (
    <div className="contenedor-perfil">
      <div className="card mt-5">
        <div className="card-header contenedor-titule">Sobre mi</div>
        <div className="card-body">
          <h4 className="card-title contenedor-cargo">{props.cargo}</h4>
          <h4 className="card-title contenedor-nombre">{props.nombre}</h4>
          <p className="card-text contenedor-texto">{props.texto}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
