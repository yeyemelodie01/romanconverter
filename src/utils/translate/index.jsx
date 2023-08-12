import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_en from './en/common.json'
import common_fr from './fr/common.json'


i18next
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng:'fr',
    resources: {
      fr: {
        common: common_fr
      },
      en: {
        common: common_en
      },
    },
  });
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
export default i18next;
