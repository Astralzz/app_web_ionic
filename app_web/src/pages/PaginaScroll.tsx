import React, { useState, useEffect, useRef } from "react";
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonTitle,
  IonButton,
  IonModal,
  IonToolbar,
  IonHeader,
  IonButtons,
} from "@ionic/react";

const PaginaScroll: React.FC = () => {
  // Lista de imagenes
  const [imagenes, setImagenes] = useState<string[]>([]);
  const [imagen, setImagen] = useState<string | null>(null);

  const generarItems = () => {
    const newLista = [];
    for (let i = 0; i < 50; i++) {
      newLista.push(`imagen ${1 + imagenes.length + i}`);
    }
    setImagenes([...imagenes, ...newLista]);
  };

  // Modal
  const [estadoModal, isEstadoModal] = useState<boolean>(false);

  useEffect(() => {
    generarItems();
  }, []);

  return (
    <h1>
      <IonTitle>Ejemplos de listas inf en ionic</IonTitle>
      <br />
      <IonList>
        {imagenes.map((item, index) => (
          <IonItem key={item}>
            <IonAvatar slot="start">
              <img
                src={"https://picsum.photos/80/80?random=" + index}
                alt="avatar"
              />
            </IonAvatar>
            <IonLabel>{item}</IonLabel>
            <IonButton
              onClick={() => {
                setImagen("https://picsum.photos/80/80?random=" + index);
                isEstadoModal(true);
              }}
              slot="end"
            >
              ver
            </IonButton>
          </IonItem>
        ))}
      </IonList>
      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          generarItems();
          setTimeout(() => ev.target.complete(), 500);
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
      {/* Modal */}
      <IonModal isOpen={estadoModal}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Imagen</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => isEstadoModal(false)}>Salir</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <img width={300} src={imagen !== null ? imagen : ""} alt="avatar" />
          <br /> <br />
          <IonButton onClick={() => isEstadoModal(false)}>Genial</IonButton>
        </div>
      </IonModal>
    </h1>
  );
};
export default PaginaScroll;
