

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useLocales } from 'expo-localization';
import * as Localization from 'expo-localization';
import Backend from 'i18next-http-backend';

// import en from "./translations/en/translation.json";
// import fr from "./translations/fr/translation.json";
import { useEffect } from "react";


const userLocale = ()=>{
  const localeArray = Localization.getLocales()
    const lang = localeArray.map(item=>item.languageCode)
    console.log(lang)
       return lang
}

// console.log("yoo")

i18n.use(Backend).use(initReactI18next).init({
  // resources: { en: { translation: en }, fr: { translation: fr } },
  fallbackLng: "en",
  lng: userLocale(),
  debug: true,
  backend:{
    loadPath:`http://192.168.10.101:5000/api/translation/${lng}`
  }
});

export default i18n;