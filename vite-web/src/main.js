import {createApp} from 'vue'
import App from './App.vue'
import './index.css'

import {createRouter, createWebHistory} from 'vue-router'

import Home from './components/Home.vue'
import Count from './components/Count.vue'
import Doc from './components/Doc.vue'

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
