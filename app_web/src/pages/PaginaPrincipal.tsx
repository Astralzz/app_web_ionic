import { IonContent, IonPage } from "@ionic/react";
import { useLocation } from "react-router";
import React from "react";
import { URL_APP } from "../apis/variables";
import BarraPrincipal from "../components/BarraPrincipal";
import ExploradorDePaginas from "../components/ExploradorDePaginas";

//Titulo de barra
const tituloBarra = (url: string): string => {
  //Paginas
  switch (url) {
    case URL_APP + "input":
      return "Ejemplos de inputs";
    case URL_APP + "lista":
      return "Ejemplos de una lista";
    case URL_APP + "otros":
      return "Algunos componentes de ionic";
    case URL_APP + "camara":
      return "Uso de la camara";
    case URL_APP + "navegador":
      return "Navegador dentro de la app";
    case URL_APP + "cookies":
      return "Guardar cookies";
    case URL_APP + "conexion":
      return "Conexion de internet";
    case URL_APP + "ubicacion":
      return "Mi localizacion";
    default:
      return "???";
  }
};

//Pagina principal
const PaginaPrincipal: React.FC = () => {
  //Obtenemos url
  const location = useLocation();
  const URL_LOCATION = location.pathname;

  return (
    <IonPage>
      {/* Barra principal */}
      <BarraPrincipal titulo={tituloBarra(URL_LOCATION)} />

      <IonContent fullscreen>
        {/* Pagina principal */}
        <ExploradorDePaginas titulo={URL_LOCATION} />
      </IonContent>
    </IonPage>
  );
};

export default PaginaPrincipal;
