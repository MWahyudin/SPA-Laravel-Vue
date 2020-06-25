<template>
<h1>hi {{ welcome }}</h1>
</template>

<script>
    export default {
        computed: {
            welcome() {
                return this.$store.getters.welcome 
            },
        },
        
    }
</script>