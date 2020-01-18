import Vue from 'vue'
import VueRouter from 'vue-router'
import VIndex from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: VIndex
    },
    {
        path: '/goodmgr',
        name: 'goodmgr',
        component: resolve => require(['../views/GoodsMgr.vue'], resolve),
        meta: {}
    }, {
        path: '/grantmgr',
        name: 'grantmgr',
        component: resolve => require(['../views/GrantMgr.vue'], resolve),
        meta: {}
    }, {
        path: '*',
        name: 'notfound',
        component: resolve => require(['../views/404NotFound.vue'], resolve),
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router