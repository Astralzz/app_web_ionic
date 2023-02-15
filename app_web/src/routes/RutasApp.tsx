import React, { useEffect, useState } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import MenuPrincipal from "../components/MenuPrincipal";
import { Route } from "react-router";
import PaginaPrincipal from "../pages/PaginaPrincipal";
import CortinaInicial from "../components/elementos/CortinaInicial";

// Control de las rutas
const RutasApp: React.FC = () => {
  //Intro
  const [intro, setIntro] = useState<boolean>(true);

  //Intro
  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 2500);
  }, []);

  if (intro) {
    return <CortinaInicial />;
  }

  //Contenedor
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        {/* Menu izquierdo */}
        <MenuPrincipal />
        <IonRouterOutlet id="main">
          {/* Paginas del menu */}
          <Route path="/*" exact={true}>
            {/* Pagina por defecto */}
            <PaginaPrincipal />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default RutasApp;
