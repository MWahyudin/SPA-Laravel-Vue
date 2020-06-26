<template>
     <div>
         <v-app>
        <toolbar></toolbar>
            <v-main>
      <router-view></router-view>
            </v-main>
        </v-app>
    </div>
</template>

<script>
import toolbar from './Toolbar.vue'
import AppCustomer from './AppCustomer'
import AppAddress from './AppAddress'


    export default {
components : {
    toolbar,
    AppCustomer,
    AppAddress
}
    }

</script>