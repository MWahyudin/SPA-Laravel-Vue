import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        welcomeMessage: 'Hello selamat datang'
    }
    ,
    getters: {
        welcome(state){
            return state.welcomeMessage
        }
    },
    mutations: {

    },
    actions: {

    }
})
export default store