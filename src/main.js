import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import axios from 'axios'
axios.defaults.baseURL = 'https://api.guildwars2.com'

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
