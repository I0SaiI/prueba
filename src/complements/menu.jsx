import React from "react";
import logo from "../assets/LOGO1.png";
import { Link } from "react-router-dom";
import './style.css'

const Menu = () => {

  return(
    <div className="fondo">
      <div className="card" style={{top: '40%'}}>
        <img src={logo} alt="logo" style={{width: '800px'}} />
          <h1 className="my-4 fw-bold">BIENVENIDO A SATNET SOLUCIONES</h1>
          <div>
              <Link to="/login" className="btn btn-primary mx-2 btn-lg">
                Iniciar sesión
              </Link>
              Registro
              Pagina principal
          </div>
      </div>
    </div>
  )
}

export default Menu;