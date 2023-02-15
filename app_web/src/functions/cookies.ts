import { CapacitorCookies } from "@capacitor/core";

//Crear cookie
export const crearCookie = (nameCookie: string, infCookie: string): void => {
  document.cookie = nameCookie + "=" + infCookie;
};

//Eliminar cookie
export const eliminarCookie = async (nombre: string):Promise<void> => {
  await CapacitorCookies.deleteCookie({
    key: nombre,
  });
};

//Obtener cookie
export const obtenerCookie = (nombre: string):string|undefined=> {
  const cookies = document.cookie;
  const cookieArray = cookies.split(";");
  for (const cookie of cookieArray) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName.trim() === nombre) {
      return cookieValue;
    }
  }
  return undefined;
};
