import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios'


const app = createApp(App)
axios.defaults.baseURL='http://localhost/ciwei'
app.config.globalProperties.$http = axios
app.mount('#app')