import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';


createApp(App).use(store).use(vant).use(router).mount('#app')
