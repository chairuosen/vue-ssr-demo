import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/index',
            component: require('../views/test.vue')
        },
        {
            path:'/test',
            component:require('../views/test2.vue')
        },
        {
            path: '/',
            redirect: '/index'
        }
    ]
})
