<style lang="less" rel="stylesheet/less">
    
</style>
<template>
    <div>
        This is view 2.
        <br>
        store.count = {{count1}}
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {}
        },
        computed: {
            count1(){
                return this.$store.state.count
            }
        },
    }
</script>
