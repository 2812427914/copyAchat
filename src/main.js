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
import {Col,Popover,BackTop, Icon,NavBar,ContactList,RadioGroup, Radio, Row, Toast,FloatingBubble, ConfigProvider,Checkbox, Button,  CheckboxGroup,Tab,List, Tabs, Swipe,TextEllipsis, SwipeItem, Sticky, Field, CellGroup,Cell, Popup} from "vant";
import App from "./App.vue";
import router from "./router";
import 'vant/lib/index.css'
import "@/assets/styles/base.less";
import "@/assets/styles/iconfont.less";
import "@/mock/index.js";
// import VueEllipsis3 from 'vue-ellipsis-3';
// 打开 main.js
import Bmob from "hydrogen-js-sdk";
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';
// import '@kangc/v-md-editor/lib/style/base-editor.css';
import VMdEditor from '@kangc/v-md-editor';
// import '@/views/RedBook/github.css';

// import '@kangc/v-md-editor/lib/style/base-editor.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// import '@kangc/v-md-editor/lib/theme/style/github.css';
import '@/views/RedBook/github.css';
import '@/views/RedBook/base-editor.css';

// import '@kangc/v-md-editor/lib/style/base-editor.css';
// 引入使用主题的样式
// import '@kangc/v-md-editor/lib/theme/style/vuepress';
// highlightjs
// highlightjs 核心代码
import hljs from 'highlight.js/lib/core';
// import Prism from 'prismjs';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
// VMdPreview.use(vuepressTheme, { });
VMdPreview.use(createCopyCodePlugin())
VMdPreview.use(createKatexPlugin())
// VMdPreview.use(createLineNumbertPlugin())

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

// 初始化 SDK版本 2.0.0 以下保留之前的初始化方法
Bmob.initialize("5f599fe64a4e2b0c", "tangzihangtangzi");

// 项目其他页面使用跟小程序一样使用Bmob对象即可，例如：
Bmob.User.login('zihangt','12345678').then(res => {
    console.log('main.js 成功登陆')
  }).catch(err => {
   console.log(err)
 });

const app = createApp(App);
app.config.globalProperties.$Bmob = Bmob

app.use(VMdPreview);
app.use(VMdEditor);
// 注册Vant组件
app.use(Tab);
app.use(Tabs);
app.use(Swipe);
app.use(SwipeItem);
app.use(NavBar)
app.use(Sticky);
app.use(Field);
app.use(CellGroup);
app.use(Cell)
app.use(Popup)
app.use(BackTop);
app.use(TextEllipsis)
// app.use(VueEllipsis3)
app.use(router);
app.use(ConfigProvider);
app.use(List);
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(Button);
app.use(ContactList)
app.use(Col);
app.use(Row);
app.use(Toast);
app.use(FloatingBubble)
app.use(Radio);
app.use(RadioGroup);
app.use(Icon);
app.use(Popover);
// app.use(showToast);
app.mount("#app");
