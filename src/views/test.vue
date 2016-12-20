<template>
    <div>
        <ul>
            <li>
                store.count {{count1}}
                <button @click="add();">+</button> @click= $store.commit('INCREASE_COUNT');
            </li>
            <li>
                vm.count {{count2}}
                <button @click="count2++">+</button> @click= count++
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'test-view',
        data(){
            return {
                count2:0
            }
        },
        computed: {
            count1(){
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
