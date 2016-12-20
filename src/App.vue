<style lang="less" rel="stylesheet/less">
    *{
        margin:0;
        padding:0;
    }
    img{
        border:none;
    }
    .sidebar{
        width:200px;
        float:left;
    }
    .view{
        margin-left:200px;
        overflow: hidden;
    }
</style>
<template>
    <div>
        <sidebar class="sidebar"></sidebar>
        <div class="view">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                ready:true
            }
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
