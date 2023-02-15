import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonPopover,
  IonRange,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
  useIonActionSheet,
  useIonAlert,
  useIonLoading,
} from "@ionic/react";
import React, { createRef, useRef, useState } from "react";
import {
  chevronUpCircle,
  colorPalette,
  document,
  globe,
  happy,
  helpCircle,
  personCircle,
  sad,
  warning,
} from "ionicons/icons";
import { RangeValue } from "@ionic/core";

//Pagina de prueba
const PaginaOtros: React.FC = () => {
  // ---------- SECCIÓN DE SCROLL
  //Referencia de el scroll
  const refScroll = createRef<HTMLIonContentElement>();

  // Poner el scroll abajo
  function scrollAbajo() {
    refScroll.current?.scrollToBottom(500);
  }
  // Poner el scroll arriba
  function scrollArriba() {
    refScroll.current?.scrollToTop(500);
  }

  // ---------- SECCIÓN DE VALIDAR EMAIL
  const [isEnfocado, setIsEnfocado] = useState<boolean>(false);
  const [isValido, setIsValido] = useState<boolean | undefined>(false);

  const validarEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validar = (ev: Event) => {
    const valor = (ev.target as HTMLInputElement).value;

    setIsValido(undefined);

    if (valor === "") return;

    validarEmail(valor) !== null ? setIsValido(true) : setIsValido(false);
  };

  const cambiarEnfoque = () => {
    setIsEnfocado(true);
  };

  // ---------- SECCIÓN DE ACTION ALERT
  const [actionAlert] = useIonActionSheet();

  // ---------- SECCIÓN DE LOS RANGOS
  const [lastEmittedValue, setLastEmittedValue] = useState<RangeValue>();

  // ---------- SECCIÓN DE ALERTAS
  const [presentAlert] = useIonAlert();
  const [present, dismiss] = useIonLoading();

  return (
    // Contenido
    <IonContent ref={refScroll} id="colorFondoPagina" className="ion-padding">
      {/* Titulo */}
      <IonTitle color={"dark"}>
        Titulo desde el .env{" "}
        {" " + process.env.REACT_APP_TITULO
          ? process.env.REACT_APP_TITULO
          : "???"}
      </IonTitle>
      <br />
      {/* Boton de bajar */}
      <IonButton color={"dark"} expand="block" onClick={scrollAbajo}>
        ir al final
      </IonButton>
      <br />
      {/* Email */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Email</IonLabel>
        </IonItemDivider>
        <IonItem
          fill="solid"
          className={`${isValido && "ion-valid"} ${
            isValido === false && "ion-invalid"
          } ${isEnfocado && "ion-touched"}`}
        >
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            type="email"
            onIonInput={(event) => validar(event)}
            onIonBlur={() => cambiarEnfoque()}
          ></IonInput>
        </IonItem>
      </IonItemGroup>
      <br />
      {/* Barra de contacto */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Contacto de ejemplo</IonLabel>
        </IonItemDivider>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton fill="solid">
              <IonIcon slot="start" icon={personCircle}></IonIcon>
              Contacto
            </IonButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton fill="solid">
              Ayuda
              <IonIcon slot="end" icon={helpCircle}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Edain Jesus</IonTitle>
        </IonToolbar>
      </IonItemGroup>
      <br />
      {/* Flotante  */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Elemento flotante</IonLabel>
        </IonItemDivider>
        <IonButton color={"dark"} expand="block" id="popover-button">
          Pulsame
        </IonButton>
        <IonPopover trigger="popover-button" dismissOnSelect={false}>
          <IonContent>
            <br />
            <IonTitle>Hola</IonTitle>
            <p>
              <IonText>
                Soy un elemento flotante y puedo almacenar mas elementos
              </IonText>
            </p>
          </IonContent>
        </IonPopover>
      </IonItemGroup>
      <br />
      {/* Item deslizable  */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Intens deslizables</IonLabel>
        </IonItemDivider>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Desliza a la izquierda</IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption color="primary">Si</IonItemOption>
            <IonItemOption color="danger">No</IonItemOption>
            <IonItemOption color="warning">Nose</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonItemGroup>
      <br />
      {/* Acordeón de ejemplo */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Acordeón</IonLabel>
        </IonItemDivider>
        <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonLabel>Animales</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Oso
            </div>
            <div className="ion-padding" slot="content">
              Perro
            </div>
            <div className="ion-padding" slot="content">
              Lobo
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header" color="light">
              <IonLabel>Frutas</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Sandia
            </div>
            <div className="ion-padding" slot="content">
              Pera
            </div>
            <div className="ion-padding" slot="content">
              Manzana
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonItemGroup>
      <br />
      {/* Buscar datos */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Barra de búsqueda</IonLabel>
        </IonItemDivider>
        <IonSearchbar
          id="open-modal"
          animated={true}
          placeholder="¿que buscas?"
        ></IonSearchbar>
      </IonItemGroup>
      <br />
      {/* Calendario */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Calendario</IonLabel>
        </IonItemDivider>
        <IonDatetime></IonDatetime>
      </IonItemGroup>
      <br />
      {/* Alerta simple  */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Alerta simple</IonLabel>
        </IonItemDivider>
        <IonButton
          expand="block"
          color={"dark"}
          onClick={() =>
            presentAlert({
              header: "Genial",
              subHeader: "Gracias por presionar",
              message: "Esta es una alerta!",
              buttons: ["OK"],
            })
          }
        >
          Pulsame
        </IonButton>
      </IonItemGroup>
      <br />
      {/* Alerta De cargando  */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Alerta de cargando</IonLabel>
        </IonItemDivider>
        <IonButton
          expand="block"
          color={"dark"}
        onClick={() => {
            present({
              message: 'Cargando, espera 3 segundos...',
              duration: 3000
            })
          }}>
          Pulsame
        </IonButton>
      </IonItemGroup>
      <br />
      {/* Alerta de acción  */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Alerta de acción</IonLabel>
        </IonItemDivider>
        <IonButton
          expand="block"
          color={"dark"}
          onClick={() =>
            actionAlert({
              header: "Una pregunta..",
              subHeader: "¿Te gusta la app?",
              buttons: [
                {
                  text: "No",
                  role: "destructive",
                  data: {
                    action: "delete",
                  },
                },
                {
                  text: "Si",
                  data: {
                    action: "share",
                  },
                },
                {
                  text: "Nose",
                  role: "cancel",
                  data: {
                    action: "cancel",
                  },
                },
              ],
            })
          }
        >
          Pulsame
        </IonButton>
      </IonItemGroup>
      <br />
      {/* Elementos de rango */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Rangos</IonLabel>
        </IonItemDivider>
        <IonRange
          onIonChange={({ detail }) => setLastEmittedValue(detail.value)}
        ></IonRange>
        <IonLabel> Soy {lastEmittedValue as number}% genial</IonLabel>
        <br />
        <IonRange>
          <IonIcon slot="start" icon={sad}></IonIcon>
          <IonIcon slot="end" icon={happy}></IonIcon>
        </IonRange>
      </IonItemGroup>
      <br />
      {/* Calendario */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Seleccionar</IonLabel>
        </IonItemDivider>
        <IonSelect placeholder="¡Tu lenguaje favorito?">
          <IonSelectOption value="Java">Java</IonSelectOption>
          <IonSelectOption value="C">C</IonSelectOption>
          <IonSelectOption value="Python">Python</IonSelectOption>
          <IonSelectOption value="PHP">PHP</IonSelectOption>
          <IonSelectOption value="Javascript">Javascript</IonSelectOption>
        </IonSelect>
      </IonItemGroup>
      <br />
      {/* Texto ion */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Textos con iconos</IonLabel>
        </IonItemDivider>
        <br />
        <IonText color="warning">
          color amarillo
          {"  "} <IonIcon icon={warning}></IonIcon> {"  "}
        </IonText>
        <IonText color="dark">
          color negro
          {"  "} <IonIcon icon={warning}></IonIcon> {"  "}
        </IonText>{" "}
        <IonText color="danger">
          color rojo
          {"  "} <IonIcon icon={warning}></IonIcon> {"  "}
        </IonText>{" "}
        <IonText color="success">
          color verde
          {"  "} <IonIcon icon={warning}></IonIcon> {"  "}
        </IonText>
      </IonItemGroup>
      <br />
      {/* Texto de ejemplo */}
      <IonItemGroup>
        <IonItemDivider color="medium">
          <IonLabel>Ejemplo con react</IonLabel>
        </IonItemDivider>
        <IonText color="dark">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
            tellus nec mauris auctor dignissim fermentum in risus. Sed nec
            convallis sapien, id tincidunt enim. Mauris ornare eleifend nunc id
            mattis. Fusce augue diam, sagittis nec posuere at, consectetur
            tempor lectus. Nulla at lectus eget mauris iaculis malesuada mollis
            sed neque. Curabitur et risus tristique, malesuada mauris finibus,
            elementum massa. Proin lacinia mauris quis ligula blandit
            ullamcorper. Donec ut posuere lorem. In volutpat magna vitae tellus
            posuere pulvinar. Nam varius ligula justo, nec placerat lacus
            pharetra ac. Aenean massa orci, tristique in nisl ut, aliquet
            consectetur libero. Etiam luctus placerat vulputate. Aliquam ipsum
            massa, porttitor at mollis ut, pretium sit amet mi. In neque mauris,
            placerat et neque vel, tempor interdum dolor. Suspendisse gravida
            malesuada tellus, vel dapibus nisl dignissim vel. Cras ut nulla sit
            amet erat malesuada euismod vel a nulla.
          </p>
          <p>
            Phasellus sit amet iaculis odio, eget feugiat erat. Etiam sit amet
            turpis sit amet massa viverra maximus. Aenean venenatis porttitor
            pharetra. Fusce vulputate urna purus, vel efficitur mauris auctor
            non. Etiam libero odio, sodales in velit a, faucibus venenatis erat.
            Ut convallis sit amet urna in ultrices. Cras neque est, vehicula sed
            lorem ac, placerat commodo elit. Praesent turpis metus, elementum
            eget iaculis ac, elementum in odio. Nunc et elit faucibus,
            condimentum mauris consequat, ornare dolor. Sed ac lectus a est
            blandit tempor. Etiam lobortis tristique maximus.
          </p>
          <p>
            Quisque tempus porttitor massa, vel condimentum risus finibus a.
            Aliquam viverra maximus odio, id ornare justo tristique ac. Mauris
            euismod arcu eget neque sagittis rutrum. Ut vehicula porta lacus nec
            lobortis. Vestibulum et elit ultrices, lacinia metus in, lobortis
            est. Vivamus nisi justo, venenatis sit amet arcu ac, congue faucibus
            justo. Duis volutpat posuere enim, vel sagittis elit dictum et. Sed
            et congue mauris. Nam venenatis venenatis risus, ac condimentum
            neque sagittis sed. In eget nulla ultricies urna sollicitudin
            posuere. Aenean sagittis congue mauris. Proin nec libero mi. In hac
            habitasse platea dictumst. Praesent nunc nulla, dictum id molestie
            sed, pretium vitae turpis.
          </p>
          <p>
            Pellentesque vitae dapibus lacus. Nullam suscipit ornare risus quis
            ullamcorper. Nullam feugiat, sapien et sodales fermentum, risus
            ligula semper risus, id efficitur ligula augue id diam. Suspendisse
            lobortis est sit amet quam facilisis, ut vestibulum nunc dignissim.
            Donec at vestibulum magna. Maecenas maximus pretium metus. Phasellus
            congue sapien vel odio imperdiet, nec mollis odio euismod. Sed vel
            eros ut sapien accumsan condimentum vehicula vitae lectus. Donec sed
            efficitur lorem. Aenean tristique mi libero, eleifend tincidunt
            libero finibus at. Mauris condimentum fermentum rutrum.
          </p>
          <p>
            Nulla tristique ultricies suscipit. Donec non ornare elit. Vivamus
            id pretium mauris, nec sagittis leo. Fusce mattis eget est id
            sollicitudin. Suspendisse dictum sem magna, in imperdiet metus
            suscipit et. Suspendisse enim enim, venenatis et orci eu, suscipit
            congue lacus. Praesent vel ligula non eros tempor interdum. Proin
            justo orci, ultricies vitae diam sed, semper consectetur ligula.
            Aenean finibus ante velit, nec efficitur libero cursus cursus. Duis
            mi nunc, imperdiet sed condimentum vel, porttitor ut lacus. Quisque
            dui ipsum, vehicula sed vestibulum id, semper vel libero.
            Suspendisse tincidunt mollis condimentum. Nulla facilisi. Etiam
            neque nisl, egestas nec iaculis sed, tristique faucibus sem. Sed
            mollis dui quis ligula cursus rutrum.
          </p>
        </IonText>
      </IonItemGroup>
      <br />
      {/* Boton de subir */}
      <IonButton color={"dark"} expand="block" onClick={scrollArriba}>
        ir al principio
      </IonButton>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton color="dark">
          <IonIcon icon={chevronUpCircle}></IonIcon>
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton>
            <IonIcon icon={document}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={colorPalette}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={globe}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonContent>
  );
};

export default PaginaOtros;
