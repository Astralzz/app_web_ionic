import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

//Parámetros
interface Props {
  titulo: string;
}

//Barra principal
const BarraPrincipal: React.FC<Props> = (props) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{props.titulo}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default BarraPrincipal;
