import Vue from 'vue'
import Vuetify from 'vuetify'

window.axios = require('axios');

//Global component
import AppHome from './components/AppHome.vue'

//Vuex
import store from './store/store.js'

//Vue Router
import router from './router/router.js'

Vue.use(Vuetify)


const vm = new Vue({
     el: '#app',
     vuetify : new Vuetify(),
     // render: h => h(App)
     router,
     store,
     components: {
          'home' : AppHome,
     },
});