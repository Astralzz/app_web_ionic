import { Geolocation } from "@capacitor/geolocation";

//Coordenadas
export interface Coordenadas {
  precisión: number | null;
  latitud: number | null;
  longitud: number | null;
  linkMap: string | null;
}

//Ver mi ubicación
export const obtenerLocalizacion = async (): Promise<Coordenadas> => {
  //Obtenemos los datos
  const coordinates = await Geolocation.getCurrentPosition();

  //Los ponemos
  const coordenadas: Coordenadas = {
    latitud: coordinates.coords.latitude,
    longitud: coordinates.coords.longitude,
    precisión: coordinates.coords.accuracy,
    linkMap: `https://www.google.com/maps/search/${coordinates.coords.latitude},${coordinates.coords.longitude}`,
  };

  return coordenadas;
};
