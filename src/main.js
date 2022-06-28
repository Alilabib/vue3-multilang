import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import i18n from './i18n';

const lang = localStorage.getItem('lang') || 'en';

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers['Accept-language'] = lang;
document.documentElement.lang = lang;
createApp(App).use(store).use(router).use(i18n).mount('#app')
