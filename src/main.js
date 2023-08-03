// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// // import router from './router';
// // import store from './store';

// // new Vue({
// //     render: h => h(App),
// //     router, // Add the router instance to the Vue instance
// //     store
// //   }).$mount('#app');

// createApp(App).mount('#app')

import { createApp } from "vue";
import { Tab, Tabs, Swipe, SwipeItem, Sticky, Field, CellGroup} from "vant";
import App from "./App.vue";
import router from "./router";
import 'vant/lib/index.css'
import "@/assets/styles/base.less";
import "@/assets/styles/iconfont.less";
import "@/mock/index.js";
// import TitleBar from '@/views/title-bar.vue'

const app = createApp(App);
// 注册Vant组件
app.use(Tab);
app.use(Tabs);
app.use(Swipe);
app.use(SwipeItem);
app.use(Sticky);
app.use(Field);
app.use(CellGroup);

app.use(router);
app.mount("#app");
