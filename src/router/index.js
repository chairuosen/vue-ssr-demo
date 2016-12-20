import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: require('./route.js')
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
