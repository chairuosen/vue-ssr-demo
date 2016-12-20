<style lang="less" rel="stylesheet/less">

</style>
<template>
    <div>
        <ul>
            <li v-for="route in routes" v-if="route.meta">
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
        methods: {},
        mounted(){
            console.log(this.$route)
            window.vm = this;

        }
    }
</script>
