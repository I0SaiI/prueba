import React from "react";
import "./style.css";
import logo from "../assets/LOGO1.png"

const Login =()=>{

  return(
    <div className="fondo2">
      <div className="card">
        <img src={logo} alt="logo" style={{width: '500px'}} />
        <form>
          <h1 className="my-4">Iniciar sesión</h1>
          <div className="input-group-lg">
            <input className="form-control mb-4 border border-secondary" type="text" name="email" placeholder="E-mail" onChange={this.handleChange} />
            <input className="form-control mb-4 border border-secondary" type="text" name="contraseña" placeholder="Contraseña" onChange={this.handleChange} />
          </div>
          <button className="btn btn-primary btn-lg ma-4" onClick={()=> this.inicioSesion()} >Ingresar</button>
        </form>
      </div>
    </div>
  )
}

export default Login;