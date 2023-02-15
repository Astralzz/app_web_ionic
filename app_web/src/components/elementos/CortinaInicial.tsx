import React from "react";
import { IonContent, IonImg } from "@ionic/react";
import IntroGif from "../../images/intro.gif";

const CortinaInicial: React.FC = () => {
  return (
    <IonContent className="ion-text-center">
      <IonImg
        className="img-intro"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        src={IntroGif}
        alt="intro..."
      />
    </IonContent>
  );
};

export default CortinaInicial;
