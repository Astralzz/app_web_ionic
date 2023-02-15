import { useState } from "react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

//Componentes
export interface ComponentesImages {
  archivoPath: string | undefined;
  vistaWebPath?: string | undefined;
}

// Tomar fotos
export function TomarFoto() {
  //Estados
  const [foto, setFoto] = useState<ComponentesImages>();

  //Tomar fotos
  const tomarFoto = async () => {
    // Foto
    const newFoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      allowEditing: false,
      quality: 100,
    }).catch(() => {
      return undefined;
    });

    //Comprobamos
    if (newFoto !== undefined) {
      //Creamos archivo
      const archivoNombre = new Date().getTime() + ".jpeg";

      //Nueva foto
      const fotoNueva = {
        archivoPath: archivoNombre,
        vistaWebPath: newFoto.webPath,
      };

      //Ponemos foto
      setFoto(fotoNueva);
      return;
    }

    setFoto(undefined);
  };

  //Retornamos
  return {
    setFoto,
    foto,
    tomarFoto,
  };
}
