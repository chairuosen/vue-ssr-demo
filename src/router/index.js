import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/index',
            component: require('../views/test.vue'),
            meta:{
                title:'首页'
            }
        },
        {
            path:'/test',
            component:require('../views/test2.vue'),
            meta:{
                title:"测试2"
            }
        },
        {
            path: '/',
            redirect: '/index'
        }
    ]
});

var defaultTitle = '';
if(global.window){
    defaultTitle = global.document.title;
}

router.beforeEach((to,from,next)=>{
    if(global.window){
        if(to.meta && to.meta.title){
            global.document.title = to.meta.title || defaultTitle;
        }
    }
    next();
});

export default router;
