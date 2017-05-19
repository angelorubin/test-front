import Vue from 'vue'
import Root from './Root.vue'
import VueRouter from 'vue-router'

import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)

// Components
import Lockscreen from './Lockscreen.vue'
import Dashboard from './Dashboard.vue'

Vue.use(VueRouter)

let routes = [{
        path: '/',
        component: Lockscreen
    },
    {
        path: '/dashboard',
        component: Dashboard
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(Root)
})