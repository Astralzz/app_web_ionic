import { IonButton } from "@ionic/react";
import { camera } from "ionicons/icons";
import React from "react";
import { TomarFoto } from "../functions/camara";

//Pagina de la camara
const PaginaCamara: React.FC = () => {
  // .... imagen
  const { foto, setFoto, tomarFoto } = TomarFoto();
  const ImagenIcon = () => {
    return foto !== undefined ? (
      <img alt="avatar" src={foto.vistaWebPath} width={300} />
    ) : (
      <img alt="avatar" src={camera} width={300} />
    );
  };

  return (
    <div className="container">
      <ImagenIcon />
      <br /> <br />
      <IonButton color={"dark"} onClick={() => tomarFoto()}>
        Abrir camara
      </IonButton>
    </div>
  );
};

export default PaginaCamara;
