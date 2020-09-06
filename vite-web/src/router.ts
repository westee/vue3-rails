import {createRouter, createWebHashHistory} from 'vue-router'


import Home from './views/Home.vue';
import Count from './views/Count.vue'
import Doc from './views/Doc.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import IconDemo from './components/IconDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DialogDemo from './components/DialogDemo.vue'    
import TabsDemo from './components/TabsDemo.vue'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/count',
        component: Count
    }, {
        path: '/doc',
        component: Doc,
        children: [{
            path: 'button',
            component: ButtonDemo
        }, {
            path: 'tabs',
            component: TabsDemo
        }, {
            path: 'switch',
            component: SwitchDemo
        },{
            path: 'dialog',
            component: DialogDemo
        },]
    },],
});