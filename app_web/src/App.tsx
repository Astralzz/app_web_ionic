import { IonApp, setupIonicReact } from "@ionic/react";
import React from 'react';
import RutasApp from "./routes/RutasApp";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./themes/variables.css";
import "./themes/menu.css";
import "./themes/contenedor.css";
import "./themes/paginas.css";

setupIonicReact();

//App principal
const App: React.FC = () => {
  return (
    <IonApp>
      {/* Rutas de la app */}
      <RutasApp />
    </IonApp>
  );
};

export default App;
