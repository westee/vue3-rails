import {createRouter, createWebHashHistory} from 'vue-router'
import {h} from 'vue'
import Markdown from './components/Markdown.vue'

import Home from './views/Home.vue';
import Doc from './views/Doc.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'

const md = path => h(Markdown, {path: `/src/markdown/${path}.md`, key: path});

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/doc',
        component: Doc,
        children: [
            {
                path: '',
                component: DocDemo
            },{
                path: 'intro',
                component: md('intro')
            },{
                path: 'get-started',
                component: md('get-started')
            },{
                path: 'install',
                component: md('install')
            }, {
                path: 'button',
                component: ButtonDemo
            }, {
                path: 'tabs',
                component: TabsDemo
            }, {
                path: 'switch',
                component: SwitchDemo
            }, {
                path: 'dialog',
                component: DialogDemo
            },]
    },],
});