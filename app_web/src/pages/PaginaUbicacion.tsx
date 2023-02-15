import { IonButton, IonItem, IonLabel, IonList, IonTitle } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { abrirBrowser } from "../functions/browser";
import { Coordenadas, obtenerLocalizacion } from "../functions/localizacion";

//Explorador de paginas
const PaginaUbicacion: React.FC = () => {
  //Coordenadas
  const [coordenadas, setCoordenadas] = useState<Coordenadas>({
    latitud: null,
    longitud: null,
    precisión: null,
    linkMap: null,
  });

  //Obtener coordenadas
  const obtenerCoordenadas = async () => {
    const res = await obtenerLocalizacion();

    setCoordenadas(res);
  };

  //Obtenemos
  useEffect(() => {
    obtenerCoordenadas();
  }, []);

  return (
    <div className="container">
      <br />
      <IonTitle>Tus coordenadas son:</IonTitle>
      <br /> <br />
      <IonList inset={true}>
        <IonItem>
          <IonLabel>
            Latitud:{" "}
            {coordenadas.latitud !== null
              ? coordenadas.latitud
              : " desconocido"}
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            Longitud:{" "}
            {coordenadas.longitud !== null
              ? coordenadas.longitud
              : " desconocido"}
          </IonLabel>
        </IonItem>{" "}
        <IonItem>
          <IonLabel>
            Precision:{" "}
            {coordenadas.precisión !== null
              ? coordenadas.precisión
              : " desconocido"}
          </IonLabel>
        </IonItem>
      </IonList>
      <IonButton
        disabled={coordenadas.linkMap === null}
        onClick={() =>
          abrirBrowser(coordenadas.linkMap !== null ? coordenadas.linkMap : "#")
        }
        expand="block"
        color={"dark"}
      >
        Ver en el mapa
      </IonButton>
    </div>
  );
};

export default PaginaUbicacion;
