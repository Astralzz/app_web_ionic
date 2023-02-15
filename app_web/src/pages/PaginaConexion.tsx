import React, { useEffect, useState } from "react";
import { Network } from "@capacitor/network";
import { IonIcon, IonLabel, IonTitle } from "@ionic/react";
import { wifi } from "ionicons/icons";
import { obtenerStatusDeInternet } from "../functions/coneccion";

//Conexion
interface ConexionStatus {
  estado: boolean;
  tipoDeConexion: "por wifi" | "por datos" | "ninguna" | "desconocida";
}

//Pagina de el navegador
const PaginaConexion: React.FC = () => {
  //Vemos conexión
  const [estadoConexion, setEstadoConexion] = useState<ConexionStatus>({
    estado: false,
    tipoDeConexion: "desconocida",
  });

  //Ver red
  const verEstadoDeRet = async () => {
    //Obtenemos
    const res = await obtenerStatusDeInternet();

    //Estado
    let tipo: "por wifi" | "por datos" | "ninguna" | "desconocida" =
      "desconocida";

    //Checamos
    switch (res.tipoDeConexion) {
      case "cellular":
        tipo = "por datos";
        break;
      case "wifi":
        tipo = "por wifi";
        break;
      case "none":
        tipo = "ninguna";
    }

    // actualizamos
    setEstadoConexion({
      estado: res.estado,
      tipoDeConexion: tipo,
    });
  };

  //Al inicio
  useEffect(() => {
    verEstadoDeRet();
  }, []);

  //Si cambia
  useEffect(() => {
    //Ver  cambios de la red
    Network.addListener("networkStatusChange", () => {
      verEstadoDeRet();
    });
    verEstadoDeRet();
  }, []);

  return (
    <div className="container">
      <br />
      <IonTitle>Conexion a la red</IonTitle>
      <br /> <br />
      <IonLabel>
        {estadoConexion.estado
          ? "Estas conectado a internet"
          : "No estas conectado a internet"}
      </IonLabel>
      <br /> <br />
      <IonIcon
        color={estadoConexion.estado ? "success" : "danger"}
        icon={wifi}
      ></IonIcon>
    </div>
  );
};

export default PaginaConexion;
