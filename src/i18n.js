import en from './assets/i18n/en.json';
import de from './assets/i18n/de.json';
import ar from './assets/i18n/ar.json';

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  // something vue-i18n options here ...
  locale : localStorage.getItem('lang') || 'en',
  messages:{
      en:en,
      ar:ar,
      de:de
  }
})

export default i18n;