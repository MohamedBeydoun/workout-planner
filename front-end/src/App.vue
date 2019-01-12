<template>
    <v-app class="background">
        <app-navbar/>
        <v-content class="mx-4 mb-4">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import Navbar from "./components/Navbar";

    export default {
        name: "App",
        components: {
            "app-navbar": Navbar
        },

        data() {
            return {
                //
            };
        }
    };
</script>

<style>
</style>

