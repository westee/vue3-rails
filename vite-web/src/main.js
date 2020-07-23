import {createApp} from 'vue'
import App from './App.vue'
import './index.css'

import {createRouter, createWebHistory} from 'vue-router'

import Home from './views/Home.vue'
import Count from './views/Count.vue'
import Doc from './views/Doc.vue'

let router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/count',
        component: Count
    },{
        path: '/doc',
        component: Doc
    },],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
