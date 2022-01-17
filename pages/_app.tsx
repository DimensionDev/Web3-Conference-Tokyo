import "../styles/globals.css";
import type { AppProps } from "next/app";
import i18next from "i18next";
import _en from "../public/locales/en/common.json";
import _ja from "../public/locales/ja/common.json";

function MyApp({ Component, pageProps }: AppProps) {
  i18next.init({
    lng: 'ja',
    fallbackLng: "ja",
    resources: {
      en: {
        translation: _en,
      },
      ja: {
        translation: _ja,
      },
    },
  });
 

  return <Component {...pageProps} />;
}

export default MyApp;
