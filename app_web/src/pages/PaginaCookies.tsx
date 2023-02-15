import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonText,
  IonTitle,
  useIonAlert,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import ElementoInput from "../components/elementos/ElementoInput";
import {
  crearCookie,
  eliminarCookie,
  obtenerCookie,
} from "../functions/cookies";

//Lista de cookies
const listaKeysCookies = ["valor_1", "valor_2", "valor_3"];

//Pagina de las cookies
const PaginaCookies: React.FC = () => {
  // SECCIÓN DE DATOS A GUARDAR
  const [valor1, setValor1] = useState<string>("");
  const [valor1Valido, isValor1Valido] = useState<undefined | boolean>(false);
  const [valor2, setValor2] = useState<string>("");
  const [valor2Valido, isValor2Valido] = useState<undefined | boolean>(false);
  const [valor3, setValor3] = useState<string>("");
  const [valor3Valido, isValor3Valido] = useState<undefined | boolean>(false);

  // SECCIÓN DE DATOS A GUARDAR
  const [valor1Cookies, setValor1Cookies] = useState<string | null>(null);
  const [valor2Cookies, setValor2Cookies] = useState<string | null>(null);
  const [valor3Cookies, setValor3Cookies] = useState<string | null>(null);

  // Alerta
  const [presentAlert] = useIonAlert();

  //Guardar cookies
  const guardarCookies = () => {
    //Creamos cookies
    if (valor1 !== "") {
      crearCookie(listaKeysCookies[0], valor1);
      setValor1Cookies(valor1);
    }
    if (valor2 !== "") {
      crearCookie(listaKeysCookies[1], valor2);
      setValor2Cookies(valor2);
    }
    if (valor3 !== "") {
      crearCookie(listaKeysCookies[2], valor3);
      setValor3Cookies(valor3);
    }

    // Alerta
    presentAlert({
      header: "Éxito",
      subHeader: "Se guardaron las cookies",
      buttons: ["OK"],
    });
  };

  //Borrar cookies
  const borrarCookies = async () => {
    //Eliminamos
    await eliminarCookie(listaKeysCookies[0]);
    setValor1Cookies(null);
    await eliminarCookie(listaKeysCookies[1]);
    setValor2Cookies(null);
    await eliminarCookie(listaKeysCookies[2]);
    setValor3Cookies(null);

    // Alerta
    presentAlert({
      header: "Éxito",
      subHeader: "Se borraron las cookies",
      buttons: ["OK"],
    });
  };

  //Buscar datos de cookie
  const buscarDatosDeCookie = () => {
    //Obtenemos cookie
    const valor1Cookie = obtenerCookie(listaKeysCookies[0]);

    if (valor1Cookie !== undefined) {
      setValor1Cookies(valor1Cookie);
    }
    //Obtenemos cookie
    const valor2Cookies = obtenerCookie(listaKeysCookies[1]);

    if (valor2Cookies !== undefined) {
      setValor2Cookies(valor2Cookies);
    }
    //Obtenemos cookie
    const valor3Cookie = obtenerCookie(listaKeysCookies[2]);

    if (valor3Cookie !== undefined) {
      setValor3Cookies(valor3Cookie);
    }
  };

  //Obtener datos
  useEffect(() => {
    buscarDatosDeCookie();
  }, []);

  return (
    <IonContent>
      <br />
      <IonTitle>Cookies en la app</IonTitle>
      <br />
      <IonItem>
        <IonLabel>
          <IonText>
            Las cookies ayudan a conservar la información aunque al app o el
            navegador se cierre
          </IonText>
        </IonLabel>
      </IonItem>
      <br /> <br />
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Guardar datos</IonLabel>
        </IonItemDivider>
        {/* valor 1 */}
        <ElementoInput
          expresionRegular={/^[A-Za-z0-9]{1,75}$/}
          valorEtiqueta={"Elemento 1"}
          claseInput={"input"}
          tipoInput={"text"}
          nameInput={"valor 1"}
          valor={valor1}
          isValorValido={valor1Valido}
          setValorValido={isValor1Valido}
          setValor={setValor1}
          longitudMin={75}
          longitudMax={75}
        />
        {/* valor 2 */}
        <ElementoInput
          expresionRegular={/^[A-Za-z0-9]{1,75}$/}
          valorEtiqueta={"Elemento 2"}
          claseInput={"input"}
          tipoInput={"text"}
          nameInput={"valor 2"}
          valor={valor2}
          isValorValido={valor2Valido}
          setValorValido={isValor2Valido}
          setValor={setValor2}
          longitudMin={75}
          longitudMax={75}
        />{" "}
        {/* valor 3 */}
        <ElementoInput
          expresionRegular={/^[A-Za-z0-9]{1,75}$/}
          valorEtiqueta={"Elemento 3"}
          claseInput={"input"}
          tipoInput={"text"}
          nameInput={"valor 3"}
          valor={valor3}
          isValorValido={valor3Valido}
          setValorValido={isValor3Valido}
          setValor={setValor3}
          longitudMin={75}
          longitudMax={75}
        />
        <IonButton
          onClick={() => guardarCookies()}
          expand="block"
          color={"dark"}
        >
          Guardar valores en cookies
        </IonButton>
      </IonItemGroup>
      {/* Obtener valores */}
      <br />
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Obtener cookies</IonLabel>
        </IonItemDivider>
        <IonItem>
          <IonLabel>
            Valor 1 = {valor1Cookies !== null ? valor1Cookies : ""}
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            Valor 2 = {valor2Cookies !== null ? valor2Cookies : ""}
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            Valor 3 = {valor3Cookies !== null ? valor3Cookies : ""}
          </IonLabel>
        </IonItem>
        <IonButton
          onClick={() => borrarCookies()}
          expand="block"
          color={"danger"}
        >
          Borrar cookies
        </IonButton>
      </IonItemGroup>
    </IonContent>
  );
};

export default PaginaCookies;
