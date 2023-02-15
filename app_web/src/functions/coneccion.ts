import { Network } from "@capacitor/network";

//Conexion
interface ConexionStatus {
  estado: boolean;
  tipoDeConexion: "wifi" | "cellular" | "none" | "unknown";
}


//Ves estado de la conexión
export const obtenerStatusDeInternet = async (): Promise<ConexionStatus> => {

  //Chocamos
  const status = await Network.getStatus();

  return { estado: status.connected, tipoDeConexion: status.connectionType };
};
