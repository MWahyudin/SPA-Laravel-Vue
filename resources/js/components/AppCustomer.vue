<template>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">email</th>
          <th class="text-left">city</th>
          <th class="text-left">country</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.city }}</td>
          <td>{{ customer.country }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
// import axios from 'axios'

    export default {
      data() {
        return {
          customers: null
        }
      },
      created() {
        this.getCustomers()
      },
        computed: {
            welcome() {
                return this.$store.getters.welcome 
            },
        },
        methods: {
          getCustomers() {
            axios.get('/api/customer')
            .then(res => this.customers = res.data.data)
            
            .catch(err => {
              console.error(err); 
            })
          }
        },
        
        
    }
</script>