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
import AppMahasiswa from './AppMahasiswa'
import AppFakultas from './AppFakultas'


    export default {
components : {
    toolbar,
    AppMahasiswa,
    AppFakultas
}
    }

</script>