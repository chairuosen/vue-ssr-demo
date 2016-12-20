module.exports = [
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
    },
    {
        path:'*',
        redirect:'/'
    }
];
