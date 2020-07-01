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
/* eslint-disable vue/no-unused-components */
import toolbar from './Toolbar.vue';
import AppCustomer from './AppCustomer.vue';
import AppAddress from './AppAddress.vue';

export default {
	components: {
		toolbar,
		AppCustomer,
		AppAddress,
	},
};

</script>
