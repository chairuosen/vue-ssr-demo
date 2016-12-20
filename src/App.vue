<style lang="less" rel="stylesheet/less">
    *{
        margin:0;
        padding:0;
    }
    img{
        border:none;
    }
    li{
        margin-left:20px;
    }
    .sidebar{
        width:200px;
        float:left;
    }
    .view{
        margin-left:200px;
    }
</style>
<template>
    <div>
        <sidebar class="sidebar"></sidebar>
        <keep-alive>
            <router-view class="view"></router-view>
        </keep-alive>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        computed: {},
        methods: {},
        components:{
            sidebar:require('components/sidebar.vue')
        },
        mounted(){

        }
    }
</script>
