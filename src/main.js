import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Vue from "vue";
import ElementPlus from "element-plus";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// import "ele-plus/lib/ele-plus.css";
 createApp(App)
 .use(ElementPlus)
 .use(router)
 .use(store)
 .mount('#app')
