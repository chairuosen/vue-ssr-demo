<template>
    <div>
        {{count}}
        <button @click="add();">+</button>
    </div>
</template>

<script>
    export default {
        name: 'test-view',
        data(){
            return {}
        },
        computed: {
            count(){
                return this.$store.state.count
            }
        },
        methods: {
            add: function () {
                this.$store.commit('INCREASE_COUNT');
            }
        }
    }
</script>
