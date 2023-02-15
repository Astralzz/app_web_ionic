import { TextFieldTypes } from "@ionic/core";
import { IonInput, IonItem, IonLabel } from "@ionic/react";
import React, { Dispatch, SetStateAction, useState } from "react";

//Parámetros
interface Props {
  longitudMin: number;
  longitudMax: number;
  expresionRegular: RegExp;
  valorEtiqueta: string;
  claseInput: string;
  tipoInput: TextFieldTypes;
  nameInput: string;
  valor: string;
  ocultar?: boolean;
  requerido?: boolean;
  isValorValido: undefined | boolean;
  setValorValido: Dispatch<SetStateAction<undefined | boolean>>;
  setValor: Dispatch<SetStateAction<string>>;
  Icono?: React.FC;
}

//Input
const ElementoInput: React.FC<Props> = (props) => {
  // Enfoque
  const [isInputEnfocado, setInputEnfocado] = useState<boolean>(false);

  //Validar con expresión regular
  const validarCadena = (nombre: string) => {
    //Retornamos (si devuelve nul es error)
    return nombre.match(props.expresionRegular);
  };

  //Validar
  const validar = (ev: Event) => {
    //Obtenemos el valor
    const valorInput = (ev.target as HTMLInputElement).value.normalize("NFD");
    // .replace(/[\u0300-\u036f]/g, "");
    // .replace(/[^a-zA-Z\d\sñÑ]/gi, "")

    //Ponemos el valor como no definido
    props.setValorValido(undefined);
    props.setValor(valorInput);

    //Si el valor es nulo devolvemos
    if (valorInput === "") return;

    //Validamos nombre
    validarCadena(valorInput) !== null
      ? props.setValorValido(true)
      : props.setValorValido(false);
  };

  return (
    <IonItem
      fill="outline"
      hidden={props.ocultar}
      className={`${props.isValorValido && "ion-valid"} ${
        props.isValorValido === false && "ion-invalid"
      } ${isInputEnfocado && props.valor !== "" && "ion-touched"} ${
        props.claseInput
      }`}
      counter={true}
    >
      <IonLabel position="floating">{props.valorEtiqueta}</IonLabel>
      <IonInput
        required={props.requerido}
        name={props.nameInput}
        type={props.tipoInput}
        maxlength={props.longitudMax}
        minlength={props.longitudMin}
        value={props.valor}
        onIonInput={(event) => validar(event)}
        onIonBlur={() => setInputEnfocado(props.valor === "" ? false : true)}
      ></IonInput>
      {/* Icono */}
      {props.Icono ? <props.Icono /> : <></>}
    </IonItem>
  );
};

export default ElementoInput;
