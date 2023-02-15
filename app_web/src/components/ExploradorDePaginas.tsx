import React from "react";
import { Redirect } from "react-router";
import { URL_APP } from "../apis/variables";
import PaginaCamara from "../pages/PaginaCamara";
import PaginaConexion from "../pages/PaginaConexion";
import PaginaCookies from "../pages/PaginaCookies";
import PaginaInputs from "../pages/PaginaInputs";
import PaginaNavegador from "../pages/PaginaNavegador";
import PaginaOtros from "../pages/PaginaOtros";
import PaginaScroll from "../pages/PaginaScroll";
import PaginaUbicacion from "../pages/PaginaUbicacion";
import PaginaPorDefecto from "./PaginaPorDefecto";

//Parámetros
interface Props {
  titulo: string;
}

//Explorador de paginas
const ExploradorDePaginas: React.FC<Props> = (props) => {
  //Paginas
  switch (props.titulo) {
    case URL_APP + "input":
      return <PaginaInputs />;
    case URL_APP + "lista":
      return <PaginaScroll />;
    case URL_APP + "otros":
      return <PaginaOtros />;
    case URL_APP + "camara":
      return <PaginaCamara />;
    case URL_APP + "navegador":
      return <PaginaNavegador />;
    case URL_APP + "conexion":
      return <PaginaConexion />;
    case URL_APP + "cookies":
      return <PaginaCookies />;
    case URL_APP + "ubicacion":
      return <PaginaUbicacion />;
    case URL_APP + "error":
      return <PaginaPorDefecto />;
    default:
      return <Redirect to={URL_APP + "input"} />;
  }
};

export default ExploradorDePaginas;
