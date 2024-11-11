import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vuetyped from 'vue3typed'

const app = createApp(App);
app.use(router).use(vuetyped).use(createPinia());

app.mount("#app");
