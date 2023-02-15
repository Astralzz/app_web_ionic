import { IonButton } from "@ionic/react";
import React from "react";
import { abrirBrowser } from "../functions/browser";

//Pagina de el navegador
const PaginaNavegador: React.FC = () => {
  return (
    <div className="container">
      <IonButton
        color={"dark"}
        onClick={() =>
          abrirBrowser("https://ionicframework.com/docs/components")
        }
      >
        Abrir navegador
      </IonButton>
    </div>
  );
};

export default PaginaNavegador;
