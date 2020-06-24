<template>
    <div>
                        <v-toolbar>
                            <v-toolbar-title>Single Page application using Vue <v-icon color="red darken-2">mdi-heart
                                </v-icon>
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <router-link v-for="page in pages" :key="page.title" :to="page.to">
                                <v-btn class="ma-2" outlined color="indigo">{{ page.title }}<v-icon>{{page.icon }}</v-icon></v-btn>
                            </router-link>
                        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pages: [{
                        title: "Mahasiswa",
                        to: "/mahasiswa",
                        icon: "mdi-magnify"
                    },
                    {
                        title: "Fakultas",
                        to: "/fakultas",
                        icon: "mdi-dots-vertical"
                    },
                ]
            }
        },
    }

</script>

<style lang="scss" scoped>

</style>
