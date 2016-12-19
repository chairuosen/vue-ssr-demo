import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },

    actions: {
        GET_COUNT: ({state}) => {
            return Promise.resolve(state.count)
        }
    },

    mutations: {
        SET_COUNT: (state, data) => {
            Vue.set(state.count, data);
        },
        INCREASE_COUNT: (state)=> {
            state.count++;
        }
    },

    getters: {
        getCount (state, getters) {
            return state.count;
        }
    }
})

export default store
