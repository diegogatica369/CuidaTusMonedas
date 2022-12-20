import React , {useCallback}from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import gatito from '../../assets/logo.png';
import { Rectangulo } from "../FondoLogin/FondoLogin";

const Login = () => {

  const navigate = useNavigate();

  const handleOnClick = useCallback(()=> navigate("/Perso",{},[navigate]));


  return (
    <div className="divPrincipal">
      <Rectangulo/>
      <div>
        <div >
          <div className="gato">
            <a href="/">
            <img src={gatito}  alt="nuestro logo" width={"280px"} />
            </a>
          </div>
          <div className="tituloLogin">
            <h1 class="diseñoLogin">Bienvenido Nuevamente!</h1>
          </div>
          <div className="SubtituloLogin">
          <h2>Ingresa tu cuenta de usuario para iniciar sesion</h2>
          </div>
          <div className="Credenciales">
          <form>
            <label class="nameLogin1" for="name"> Nombre de usuario</label>
            <input
              class="cuadroNameLogin1"
              type="text"
              name="nombre"
            />
            <br />
            <label class="contraseñaLogin1" for="contraseña">Contraseña</label>
            <input class="cuadroContraseñaLogin1" type={"text"} name="contraseña">
            </input>
          </form>
          <h6 class="diseñoH6">¿Olvidaste tu contraseña?</h6>

          <center class="botonIniciarSesion">
            <button type="button" class="btn btn-warning btn-lg" onClick={()=>{ handleOnClick();}} > <h7 class="h7">Ingresar</h7></button>
          </center>
          <div class="diseñoH8">
            ¿No tienes una cuenta?  Regístrate
          </div>

          </div>

        </div>

      </div>
    </div>
  );

}

export default Login;