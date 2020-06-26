import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//components
import AppCustomer from '../components/AppCustomer.vue'
import AppAddress from '../components/AppAddress'


const routes = [

    //Auth Path
    { path: '/customer', component: AppCustomer, name: 'customer'},
    { path: '/address', component: AppAddress, name: 'address'}
]


const router = new VueRouter({
    routes,// short for `routes: routes`
    hasbang: false,
    mode: 'history'
})

export default router
