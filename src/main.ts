import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "./plugins/element";
import "./assets/css/clear.scss"; //格式化全局初始样式
import "./assets/css/index.scss"; //全局样式文件

createApp(App)
  .use(store)
  .use(router)
  .use(Element)
  .mount("#app");
