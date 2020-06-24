import './bootstrap'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

//Global component
import AppHome from './components/AppHome.vue'

//Vue router
//Vue Router
import router from './router/router.js'
Vue.use(Vuex)
Vue.use(Vuetify)


const vm = new Vue({
     el: '#app',
     vuetify : new Vuetify(),
     // render: h => h(App)
     router,
     components: {
          'home' : AppHome,
     },
});