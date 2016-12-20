<style lang="less" rel="stylesheet/less">
    .nav{
        li{
            padding:0 20px;
            list-style: none;
            &.actived{
                background:#e7e7e7;
            }
            a{
                color:#333;
            }
        }
    }
</style>
<template>
    <div>
        <ul class="nav">
            <li v-for="route in routes" v-if="route.meta" :class="{actived:isCurrent(route)}">
                <router-link :to="route.path">{{route.meta.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    var routes = require('router/route');
    export default {
        data(){
            return {
                routes
            }
        },
        computed: {},
        methods: {
            isCurrent(route){
                return this.$route.path == route.path;
            }
        },
        mounted(){
        }
    }
</script>
