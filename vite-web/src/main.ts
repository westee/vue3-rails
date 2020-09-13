import './lib/east.scss'
import './index.scss'
import {createApp} from 'vue'
import App from "./App.vue";
import './lib/svg.js'

import {router} from './router'


const app = createApp(App);
app.use(router);
app.mount('#app');
