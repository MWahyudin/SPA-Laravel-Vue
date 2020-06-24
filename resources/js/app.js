import './bootstrap'
import Vue from 'vue'
import AppHome from './components/AppHome.vue'

//Vuetify
import Vuetify from 'vuetify'

Vue.use(Vuetify)

new Vue({
     el: '#app',
     vuetify : new Vuetify(),
     // render: h => h(App)
     components: {
          'home' : AppHome,
     },
});