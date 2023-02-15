import {
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonTextarea,
  IonTitle,
  useIonAlert,
} from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import React, { useState } from "react";
import ElementoInput from "../components/elementos/ElementoInput";

//Pagina de ejemplos de inputs
const PaginaInputs: React.FC = () => {
  // SECCIÓN EMAIL
  const [email, setEmail] = useState<string>("");
  const [isEmailValido, setEmailValido] = useState<undefined | boolean>(false);

  // SECCIÓN DE CONTRASEÑA
  const [password, setPassword] = useState<string>("");
  const [isPassOculta, setOcultarPass] = useState<boolean>(false);
  const [isPasswordValida, setPasswordValida] = useState<undefined | boolean>(
    false
  );

  // Alerta
  const [alertaPresente] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");

  const IconoPass = () => {
    return (
      <IonButton
        type="button"
        slot="end"
        className="boton-input"
        onClick={() => setOcultarPass(!isPassOculta)}
      >
        <IonIcon
          slot="end"
          size="large"
          icon={isPassOculta ? eyeOutline : eyeOffOutline}
        />
      </IonButton>
    );
  };

  return (
    <h1>
      <IonTitle>Ejemplos de inputs en ionic</IonTitle>
      <br />

      {/* Ejemplo  */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Ejemplo con react</IonLabel>
        </IonItemDivider>
        {/* Email */}
        <ElementoInput
          expresionRegular={/^[0-9]{7}[^\s@]+@uagro.mx$/}
          valorEtiqueta={"Correo institucional"}
          claseInput={"inputs-login"}
          tipoInput={"email"}
          nameInput={"email"}
          valor={email}
          isValorValido={isEmailValido}
          setValorValido={setEmailValido}
          setValor={setEmail}
          longitudMin={17}
          longitudMax={17}
          requerido
        />
        {/* Contraseña */}
        <ElementoInput
          expresionRegular={/^[A-Za-z0-9]{8,16}$/}
          valorEtiqueta={"Contraseña"}
          claseInput={"inputs-login"}
          tipoInput={isPassOculta ? "text" : "password"}
          nameInput={"password"}
          valor={password}
          isValorValido={isPasswordValida}
          setValorValido={setPasswordValida}
          setValor={setPassword}
          longitudMin={6}
          longitudMax={16}
          Icono={IconoPass}
          requerido
        />
        {/* Boton */}
        <IonButton
          disabled={!isEmailValido || !isPasswordValida}
          type="button"
          className="boton-login"
          expand="block"
          onClick={() =>
            alertaPresente({
              header: "Te gusta la app?",
              buttons: [
                {
                  text: "NO",
                  role: "cancel",
                  handler: () => {
                    setHandlerMessage("=(");
                  },
                },
                {
                  text: "SI",
                  role: "confirm",
                  handler: () => {
                    setHandlerMessage("=)");
                  },
                },
              ],
              onDidDismiss: (e: CustomEvent) =>
                setRoleMessage(`Dismissed with role: ${e.detail.role}`),
            })
          }
        >
          Acceder
        </IonButton>
      </IonItemGroup>

      <br />

      <IonList>
        {/* Inputs por defecto */}
        <IonItemGroup>
          <IonItemDivider color="medium">
            <IonLabel>Inputs por defecto</IonLabel>
          </IonItemDivider>
          <IonItem>
            <IonLabel>Ejemplo 1</IonLabel>
            <IonInput placeholder="Introduce un texto"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Ejemplo 2</IonLabel>
            <IonInput placeholder="Introduce un texto"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Ejemplo 3</IonLabel>
            <IonInput placeholder="Introduce un texto"></IonInput>
          </IonItem>
          <IonItem fill="outline">
            <IonLabel position="floating">Ejemplo 4</IonLabel>
            <IonInput placeholder="Introduce un texto"></IonInput>
          </IonItem>
        </IonItemGroup>

        {/* Areas por defecto */}
        <IonItemGroup>
          <IonItemDivider color="medium">
            <IonLabel>Areas por defecto</IonLabel>
          </IonItemDivider>
          <IonItem>
            <IonLabel>Ejemplo 1</IonLabel>
            <IonTextarea
              maxlength={300}
              placeholder="texto del area"
            ></IonTextarea>
          </IonItem>
          <IonItem>
            <IonTextarea
              placeholder="texto del area"
              autoGrow={true}
              value="Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Mauris tellus sem, 
              auctor accumsan egestas sed, venenatis 
              at ex. Nam consequat ex odio, suscipit rhoncus 
              orci dictum eget. Aenean sit amet ligula varius 
              felis facilisis lacinia nec volutpat nulla. Duis 
              ullamcorper sit amet turpis sed blandit. Integer 
              pretium massa eu faucibus interdum."
            ></IonTextarea>
          </IonItem>
          <IonItem>
            <IonLabel>Ejemplo 1</IonLabel>
            <IonTextarea
              disabled={true}
              placeholder="area bloqueada"
            ></IonTextarea>
          </IonItem>
          <IonTextarea
            placeholder="Ingrese texto, abandone el área de texto, regrese y escriba para borrar"
            clearOnEdit={true}
          ></IonTextarea>
        </IonItemGroup>

        {/* Personalizados */}
        <IonItemGroup>
          <IonItemDivider color="medium">
            <IonLabel>Personalizado</IonLabel>
          </IonItemDivider>
          <IonItem counter>
            <IonLabel position="floating">Ejemplo 4</IonLabel>
            <IonInput
              maxlength={20}
              color="danger"
              clearInput={true}
              placeholder="Introduce un texto"
              value="valor por defecto"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonTextarea
              autoGrow
              className="custom-textarea"
              placeholder="Texto de area"
            ></IonTextarea>
          </IonItem>
        </IonItemGroup>
      </IonList>
    </h1>
  );
};

export default PaginaInputs;
