import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//components
import AppMahasiswa from '../components/AppMahasiswa.vue'
import AppFakultas from '../components/AppFakultas'


const routes = [

    //Auth Path
    { path: '/mahasiswa', component: AppMahasiswa, name: 'mahasiswa'},
    { path: '/fakultas', component: AppFakultas, name: 'fakultas'}
]


const router = new VueRouter({
    routes,// short for `routes: routes`
    hasbang: false,
    mode: 'history'
})

export default router
