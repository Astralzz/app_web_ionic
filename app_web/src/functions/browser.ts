import { Browser } from "@capacitor/browser";

export const abrirBrowser = async (url_b: string) => {
  await Browser.open({ url: url_b });
};
